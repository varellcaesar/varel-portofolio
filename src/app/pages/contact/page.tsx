"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import { ContactFormData, contactSchema } from "@varel-web/lib/contact-schema";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;

    const formData = new FormData(form);
    const data: ContactFormData = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      topic: String(formData.get("topic") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const formattedErrors: typeof errors = {};

      Object.keys(fieldErrors).forEach((key) => {
        formattedErrors[key as keyof ContactFormData] =
          fieldErrors[key as keyof typeof fieldErrors]?.[0];
      });

      setErrors(formattedErrors);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        console.error("CONTACT API ERROR:", result);
        toast.error(
          result?.error ||
            result?.errors?.message?.[0] ||
            "Failed to send message"
        );
        return;
      }

      toast.success("Message sent successfully");
      form.reset(); // ✅ AMAN
    } catch (error) {
      console.error("UNEXPECTED ERROR:", error);
      toast.error("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-22 md:px-16 w-full">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Contact
        </motion.h1>

        <motion.p variants={item} className="text-gray-600 mb-10">
          Get in touch with me
        </motion.p>

        <motion.form
          variants={container}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input name="website" type="text" className="hidden" />

          {[
            { name: "name", placeholder: "Name *" },
            { name: "email", placeholder: "Email *", type: "email" },
            { name: "phone", placeholder: "Phone" },
            { name: "topic", placeholder: "Topic" },
          ].map((field) => (
            <motion.div key={field.name} variants={item}>
              <input
                name={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder}
                className="block w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black placeholder:italic"
              />
              {errors[field.name as keyof ContactFormData] && (
                <p className="text-sm text-red-500 mt-1">
                  {errors[field.name as keyof ContactFormData]}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div variants={item}>
            <textarea
              name="message"
              rows={5}
              placeholder="Message *"
              className="block w-full border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-black placeholder:italic"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            variants={item}
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-3 transition-all hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
