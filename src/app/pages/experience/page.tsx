"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2023 — Present",
    title: "Freelance Software Engineer",
    company: "Self Worker · Remote",
    achievements: [
      "Partner with clients to design and ship modern web products that balance clean user experience, fast performance, and maintainable architecture.",
      "Translate business ideas into production-ready solutions, handling everything from technical planning and frontend implementation to deployment and iteration.",
      "Work closely with founders and teams to improve product quality, streamline delivery, and turn early concepts into polished digital experiences.",
    ],
  },
  {
    period: "Jun 2022 — Present",
    title: "Software Engineer",
    company: "broom.id · Full-time",
    achievements: [
      "Architected and delivered Android and iOS mobile applications from the ground up, supporting thousands of used-car dealers in managing and scaling their businesses.",
      "Built and scaled the main company portal from inception, contributing to an increase of up to 40% user engagement through improved UX, performance, and system structure.",
      "Developed a dedicated sales mobile application that streamlined workflows and directly improved sales execution efficiency.",
      "Implemented CodePush to enable faster iteration and reduce release cycles, cutting time to market by at least 20%.",
      "Migrated internal dashboards from Retool to a custom-built solution, reducing maintenance overhead and improving operational reliability.",
    ],
  },
  {
    period: "Mar 2021 — Jun 2022",
    title: "Software Engineer",
    company: "GajiGesa · Full-time",
    achievements: [
      "Contributed to multiple production mobile applications using React Native, Redux, and GraphQL.",
      "Delivered features across GajiTim, GajiGesa mobile apps, and the Employer Web, ensuring cross-platform consistency.",
      "Led API re-integration efforts and maintained the GajiGesa PWA, improving reliability and reducing recurring bugs.",
    ],
  },
  {
    period: "Mar 2020 — Mar 2021",
    title: "Software Engineer",
    company: "UangTeman · Full-time",
    achievements: [
      "Built and shipped fintech web applications using React and REST APIs in a high-traffic, compliance-driven environment.",
      "Created reusable UI components that accelerated development across Partnership, Promo, and Finance teams.",
      "Improved application performance and long-term maintainability through systematic refactoring.",
    ],
  },
  {
    period: "Mar 2018 — Mar 2019",
    title: "Software Engineer",
    company: "Sejahtera Group",
    achievements: [
      "Built multiple web applications using HTML5, CSS3, JavaScript, PHP, and Laravel.",
      "Worked end-to-end as a full-stack engineer, handling frontend and database-level logic.",
      "Delivered production-ready solutions for education platforms and internal CMS systems.",
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const timelineLine = {
  hidden: { scaleY: 0, opacity: 0.35 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -28 : 28,
    y: 24,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ExperiencePage = () => {
  return (
    <div className="flex flex-1 justify-center px-4 py-20 md:px-16">
      <div className="w-full max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <motion.div variants={item} className="mb-16 max-w-2xl">
            <span className="mb-4 inline-flex rounded-full border border-[#1F2937]/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#767676]">
              Career Journey
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              Professional Experience
            </h1>
            <p className="text-gray-600 leading-relaxed">
              A timeline of roles where I built products, improved systems, and
              shipped software with measurable impact.
            </p>
          </motion.div>

          <div className="relative pl-8 md:pl-12">
            <motion.div
              variants={timelineLine}
              className="absolute left-[9px] top-0 h-full w-px origin-top bg-gradient-to-b from-[#fb923c] via-[#1F2937] to-transparent md:left-[11px]"
            />

            <div className="space-y-10 md:space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.period + experience.company}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="relative"
                >
                  <motion.span
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(251,146,60,0.28)",
                        "0 0 0 10px rgba(251,146,60,0)",
                        "0 0 0 0 rgba(251,146,60,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute left-[-31px] top-10 h-5 w-5 rounded-full border-4 border-white bg-[#1F2937] md:left-[-37px]"
                  />

                  <div className="overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white/90 p-6 shadow-[0_18px_50px_rgba(31,41,55,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-[#1F2937]/25 hover:shadow-[0_24px_70px_rgba(31,41,55,0.14)] md:p-8">
                    <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="text-xl font-semibold">{experience.title}</h2>
                        <p className="mt-2 text-gray-600">{experience.company}</p>
                      </div>

                      <span className="inline-flex w-fit rounded-full bg-[#1F2937]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#767676]">
                        {experience.period}
                      </span>
                    </div>

                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fb923c]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
