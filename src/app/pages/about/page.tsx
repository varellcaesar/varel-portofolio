"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen px-4 py-22 md:px-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        <motion.h1
          variants={item}
          className="text-3xl md:text-4xl font-extrabold mb-22"
        >
          About
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gray-800 mb-12 leading-relaxed text-lg"
        >
          I’m a software engineer who builds products with intention. I focus on
          crafting reliable systems, clean user experiences, and scalable
          architectures not just features that work today, but systems that
          last.
        </motion.p>

        <motion.div variants={container} className="space-y-12">
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-3">
              Engineering, not just coding
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Writing code is only part of the job. I care about how things fit
              together data flow, boundaries between systems, performance
              trade offs, and long term maintainability. My goal is to build
              software that stays readable, predictable, and scalable as it
              grows.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-3">
              Frontend with a system mindset
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I work heavily on the frontend, but I don’t treat it as “just UI”.
              I think in terms of architecture, state management, data
              contracts, and developer experience. A good interface is backed by
              a solid system and I enjoy designing both.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-3">
              Growth, ownership, and impact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I’m driven by ownership and impact. I like taking responsibility,
              improving existing systems, and helping teams move faster without
              sacrificing quality. I’m always learning not to chase trends,
              but to sharpen fundamentals and decision making.
            </p>
          </motion.div>
        </motion.div>

        <motion.hr variants={item} className="my-12 border-gray-300" />

        <motion.div variants={item}>
          <h2 className="text-lg font-semibold mb-3">This space</h2>
          <p className="text-gray-700 leading-relaxed">
            This site is a snapshot of how I think and build. It’s where I share
            selected work, experiments, and ideas around software engineering,
            product, and systems. Simple, intentional, and evolving just like
            the software I aim to build.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
