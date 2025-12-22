"use client";

import { motion } from "framer-motion";

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

const ExperiencePage = () => {
  return (
    <div className="flex flex-1 justify-center px-4 py-20 md:px-16">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-20">
          Professional Experience
        </h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative border-l border-gray-300 pl-10 space-y-24"
        >
          <motion.div variants={item} className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="absolute -left-[22px] h-3.5 w-3.5 rounded-full bg-black"></span>
              <p className="text-sm text-gray-500">Jun 2022 — Present</p>
            </div>

            <h2 className="text-xl font-semibold">
              Software Engineer (Front-end)
            </h2>
            <p className="text-gray-600 mb-4">broom.id · Full-time</p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>
                Architected and delivered Android and iOS mobile applications
                from the ground up, supporting thousands of used-car dealers in
                managing and scaling their businesses.
              </li>
              <li>
                Built and scaled the main company portal from inception,
                contributing to an increase of up to{" "}
                <strong>40% user engagement</strong> through improved UX,
                performance, and system structure.
              </li>
              <li>
                Developed a dedicated sales mobile application that streamlined
                workflows and directly improved sales execution efficiency.
              </li>
              <li>
                Implemented CodePush to enable faster iteration and reduce
                release cycles, cutting time to market by at least{" "}
                <strong>20%</strong>.
              </li>
              <li>
                Migrated internal dashboards from Retool to a custom-built
                solution, reducing maintenance overhead and improving
                operational reliability.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="absolute -left-[22px] h-3.5 w-3.5 rounded-full bg-black"></span>
              <p className="text-sm text-gray-500">Mar 2021 — Jun 2022</p>
            </div>

            <h2 className="text-xl font-semibold">
              Software Engineer (Front-end)
            </h2>
            <p className="text-gray-600 mb-4">GajiGesa · Full-time</p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>
                Contributed to multiple production mobile applications using
                React Native, Redux, and GraphQL.
              </li>
              <li>
                Delivered features across GajiTim, GajiGesa mobile apps, and the
                Employer Web, ensuring cross-platform consistency.
              </li>
              <li>
                Led API re-integration efforts and maintained the GajiGesa PWA,
                improving reliability and reducing recurring bugs.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="absolute -left-[22px] h-3.5 w-3.5 rounded-full bg-black"></span>
              <p className="text-sm text-gray-500">Mar 2020 — Mar 2021</p>
            </div>

            <h2 className="text-xl font-semibold">
              Software Engineer (Front-end)
            </h2>
            <p className="text-gray-600 mb-4">UangTeman · Full-time</p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>
                Built and shipped fintech web applications using React and REST
                APIs in a high-traffic, compliance-driven environment.
              </li>
              <li>
                Created reusable UI components that accelerated development
                across Partnership, Promo, and Finance teams.
              </li>
              <li>
                Improved application performance and long-term maintainability
                through systematic refactoring.
              </li>
            </ul>
          </motion.div>

          {/* Sejahtera Group */}
          <motion.div variants={item} className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="absolute -left-[22px] h-3.5 w-3.5 rounded-full bg-black"></span>
              <p className="text-sm text-gray-500">Mar 2018 — Mar 2019</p>
            </div>

            <h2 className="text-xl font-semibold">Software Engineer</h2>
            <p className="text-gray-600 mb-4">Sejahtera Group</p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>
                Built multiple web applications using HTML5, CSS3, JavaScript,
                PHP, and Laravel.
              </li>
              <li>
                Worked end-to-end as a full-stack engineer, handling frontend
                and database-level logic.
              </li>
              <li>
                Delivered production-ready solutions for education platforms and
                internal CMS systems.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
