"use client";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-22 md:px-16 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact</h1>
        <p className="text-gray-600 mb-10">Get in touch with me</p>

        {/* Form */}
        <div className="w-full">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name *"
                className="block w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black box-border placeholder:italic"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="block w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black box-border placeholder:italic"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="block w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black box-border placeholder:italic"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Topic"
                className="block w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black box-border placeholder:italic"
              />
            </div>
            <div>
              <textarea
                placeholder="Message *"
                rows={5}
                className="block w-full border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-black box-border placeholder:italic"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
