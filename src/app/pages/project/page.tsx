"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Website PT. Taktis Maju Sejahtera",
    description:
      "Company landing page built to support brand presence and product communication.",
    meta: "Web · Next.js · Tailwind · TypeScript",
    href: "https://taktismajusejahtera.id/",
  },
  {
    title: "Broom Hive",
    description:
      "Internal web platform used by the broom.id team to manage daily operations and data workflows.",
    meta: "Web · Next.js · React · Tailwind · TypeScript",
    href: "https://www.broom.id/",
  },
  {
    title: "Broom Hera & Sales App",
    description:
      "Internal mobile application designed to support sales and operational teams. Not publicly released.",
    meta: "Mobile · React Native · TypeScript",
    href: "#",
  },
  {
    title: "Broom Dealer (Android)",
    description:
      "Android application for used car dealers to manage inventory and daily operations within the broom.id ecosystem.",
    meta: "Mobile · React Native · TypeScript",
    href: "https://play.google.com/store/apps/details?id=com.broomdealerapp&hl=id",
  },
  {
    title: "Broom Dealer (iOS)",
    description:
      "iOS application for used car dealers to manage inventory and daily operations within the broom.id ecosystem.",
    meta: "Mobile · React Native · TypeScript",
    href: "https://apps.apple.com/id/app/broom-id/id1642251400",
  },
  {
    title: "GajiGesa App",
    description:
      "Production Android application that allows users to access flexible salary features.",
    meta: "Mobile · React Native · Redux · REST APIs",
    href: "https://play.google.com/store/apps/details?id=com.gajigesanative&hl=en_US",
  },
  {
    title: "GajiGesa PWA",
    description:
      "Progressive Web App version of GajiGesa to extend access across web platforms.",
    meta: "Web · React · Redux · REST APIs",
    href: "https://app.gajigesa.com/Login",
  },
  {
    title: "GajiTim Web",
    description:
      "Internal web application built for employee salary and finance related use cases.",
    meta: "Web · GraphQL · Redux · REST APIs",
    href: "https://employer.gajigesa.com/",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const ProjectPage = () => {
  return (
    <div className="flex flex-1 justify-center px-4 py-20 md:px-16">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Projects</h1>

        <p className="text-gray-600 max-w-2xl mb-16 leading-relaxed">
          Projects I’ve worked on across different products and teams.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Link
                href={project.href}
                target="_blank"
                className="
                  group block h-full rounded-xl border border-gray-200 p-6
                  transition-all duration-300 ease-out
                  hover:-translate-y-[3px]
                  hover:border-gray-900
                  hover:shadow-md
                "
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold mb-1 group-hover:underline">
                      {project.title}
                    </h2>

                    <p className="text-xs text-gray-500 mb-3">{project.meta}</p>

                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 text-sm font-medium text-gray-900 flex items-center gap-1">
                    <span>View project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
