"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  meta: string;
  href: string;
  category: "Web" | "Mobile";
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Website PT. Taktis Maju Sejahtera",
    description:
      "Company landing page built to support brand presence, product communication, and a more polished digital presence.",
    meta: "Next.js · Tailwind · TypeScript",
    href: "https://taktismajusejahtera.id/",
    category: "Web",
    featured: true,
  },
  {
    title: "Broom Hive",
    description:
      "Internal web platform used by the broom.id team to manage daily operations, workflows, and business-critical data.",
    meta: "Next.js · React · Tailwind · TypeScript",
    href: "https://www.broom.id/",
    category: "Web",
    featured: true,
  },
  {
    title: "Broom Hera & Sales App",
    description:
      "Internal mobile product crafted to support field sales and operational teams with faster execution and better workflow visibility.",
    meta: "React Native · TypeScript",
    href: "#",
    category: "Mobile",
  },
  {
    title: "Broom Dealer (Android)",
    description:
      "Android application for used car dealers to manage inventory, listings, and daily operational activity inside the broom.id ecosystem.",
    meta: "React Native · TypeScript",
    href: "https://play.google.com/store/apps/details?id=com.broomdealerapp&hl=id",
    category: "Mobile",
  },
  {
    title: "Broom Dealer (iOS)",
    description:
      "iOS application built to extend the broom.id dealer experience with a reliable mobile workflow for day-to-day business operations.",
    meta: "React Native · TypeScript",
    href: "https://apps.apple.com/id/app/broom-id/id1642251400",
    category: "Mobile",
  },
  {
    title: "GajiGesa App",
    description:
      "Production mobile app that enables users to access flexible salary features with a smooth and consistent product experience.",
    meta: "React Native · Redux · REST APIs",
    href: "https://play.google.com/store/apps/details?id=com.gajigesanative&hl=en_US",
    category: "Mobile",
  },
  {
    title: "GajiGesa PWA",
    description:
      "Progressive Web App version of GajiGesa built to broaden user access across web platforms without losing core product capability.",
    meta: "React · Redux · REST APIs",
    href: "https://app.gajigesa.com/Login",
    category: "Web",
  },
  {
    title: "GajiTim Web",
    description:
      "Internal employer-facing web application built for salary, finance, and team operations use cases in a production environment.",
    meta: "GraphQL · Redux · REST APIs",
    href: "https://employer.gajigesa.com/",
    category: "Web",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

const stats = [
  { label: "Projects", value: `${projects.length}+` },
  { label: "Platforms", value: "Web & Mobile" },
  { label: "Focus", value: "Product, UX, Systems" },
];

const ProjectPage = () => {
  return (
    <div className="relative flex flex-1 justify-center overflow-hidden px-4 py-20 md:px-16">
      <div className="pointer-events-none absolute left-[6%] top-[12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.14),_rgba(251,146,60,0))] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(31,41,55,0.09),_rgba(31,41,55,0))] blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 w-full max-w-6xl"
      >
        <motion.div
          variants={item}
          className="mb-12 grid gap-8 rounded-[2rem] border border-gray-200/80 bg-white/80 p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)] backdrop-blur-sm md:grid-cols-[1.5fr_0.9fr] md:p-10"
        >
          <div>
            <span className="mb-4 inline-flex rounded-full border border-[#1F2937]/10 bg-[#1F2937]/[0.03] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#767676]">
              Selected Work
            </span>

            <h1 className="max-w-3xl text-2xl font-extrabold leading-tight md:text-3xl">
              Projects that blend product thinking, clean execution, and
              scalable engineering.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              A selection of web and mobile products I have built across company
              platforms, internal tools, and client-facing experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-gray-200/80 bg-white/85 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9CA3AF]">
                  {stat.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-[#1F2937]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Link
                href={project.href}
                target="_blank"
                className="group relative block overflow-hidden rounded-[2rem] border border-gray-200 bg-[#111827] p-8 text-white shadow-[0_30px_90px_rgba(17,24,39,0.24)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_36px_110px_rgba(17,24,39,0.32)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.28),_transparent_42%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />
                <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full border border-white/8" />

                <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between">
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                        Featured {project.category}
                      </span>
                      <span className="text-sm text-white/60">{project.meta}</span>
                    </div>

                    <h2 className="max-w-lg text-2xl font-semibold leading-tight md:text-3xl">
                      {project.title}
                    </h2>

                    <p className="mt-5 max-w-xl leading-relaxed text-white/72">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                    <span>Open project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937]">More Projects</h2>
            <p className="mt-2 text-gray-600">
              Production work across mobile apps, internal tooling, and web
              platforms.
            </p>
          </div>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.28em] text-[#9CA3AF] md:block">
            Scroll through selected builds
          </span>
        </motion.div>

        <motion.div
          variants={container}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Link
                href={project.href}
                target="_blank"
                className="
                  group relative block h-full overflow-hidden rounded-[1.6rem] border border-gray-200 bg-white/85 p-6
                  shadow-[0_18px_50px_rgba(31,41,55,0.07)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:border-[#1F2937]/25
                  hover:shadow-[0_24px_70px_rgba(31,41,55,0.14)]
                "
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.16),_transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full bg-[#1F2937]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#767676]">
                        {project.category}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF]">
                        {project.meta}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-[#1F2937] group-hover:underline">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#1F2937]">
                    <span>View project</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
