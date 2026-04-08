"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Engineering, not just coding",
    description:
      "I care about how systems fit together: boundaries, data flow, maintainability, and the trade-offs that shape long-term product quality.",
  },
  {
    title: "Frontend with system thinking",
    description:
      "For me, frontend is not only presentation. It is architecture, state management, performance, and the experience of both users and developers.",
  },
  {
    title: "Ownership with impact",
    description:
      "I like stepping into messy problems, improving what already exists, and helping teams move faster without losing clarity or quality.",
  },
];

const highlights = [
  "Builds with product awareness and engineering discipline",
  "Balances speed, maintainability, and user experience",
  "Prefers clean systems over short-term hacks",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-20 md:px-16">
      <div className="pointer-events-none absolute left-[8%] top-[14%] h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.14),_rgba(251,146,60,0))] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(31,41,55,0.08),_rgba(31,41,55,0))] blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <motion.div
          variants={item}
          className="mb-10 grid gap-8 rounded-[2rem] border border-gray-200/80 bg-white/80 p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)] backdrop-blur-sm md:grid-cols-[1.4fr_0.85fr] md:p-10"
        >
          <div>
            <span className="mb-4 inline-flex rounded-full border border-[#1F2937]/10 bg-[#1F2937]/[0.03] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#767676]">
              About Me
            </span>

            <h1 className="max-w-3xl text-2xl font-extrabold leading-tight md:text-3xl">
              I build software with intention, structure, and a strong sense of
              ownership.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              I am a software engineer who enjoys turning product ideas into
              reliable systems and thoughtful user experiences. My focus is not
              only shipping features, but building software that stays clear,
              scalable, and dependable as it grows.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-[1.6rem] bg-[#111827] p-6 text-white shadow-[0_22px_60px_rgba(17,24,39,0.18)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                Mindset
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug">
                Simple, intentional, and built to last.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#fb923c]" />
                  <p className="text-sm leading-relaxed text-white/75">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={item} className="grid gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-gray-200/80 bg-white/85 p-7 shadow-[0_18px_50px_rgba(31,41,55,0.07)] transition-all duration-300 hover:border-[#1F2937]/20 hover:shadow-[0_24px_70px_rgba(31,41,55,0.12)]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1F2937] text-sm font-semibold text-white">
                    0{index + 1}
                  </span>
                  <h2 className="text-xl font-semibold text-[#1F2937]">
                    {principle.title}
                  </h2>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-[1.9rem] border border-gray-200/80 bg-white/85 p-8 shadow-[0_20px_60px_rgba(31,41,55,0.08)]"
          >
            <span className="inline-flex rounded-full bg-[#fb923c]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#c2410c]">
              This Space
            </span>

            <h2 className="mt-5 text-2xl font-bold text-[#1F2937]">
              A snapshot of how I think, build, and grow.
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              This site is more than a collection of projects. It reflects how
              I approach engineering: with curiosity, structure, and a strong
              respect for quality. It is a place to share selected work,
              evolving ideas, and the kind of systems I want to keep building.
            </p>

            <div className="my-8 h-px w-full bg-gradient-to-r from-[#1F2937]/15 via-[#fb923c]/30 to-transparent" />

            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9CA3AF]">
                  What matters to me
                </p>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  Clear thinking, reliable execution, and products that feel
                  intentional from both the user and engineering side.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9CA3AF]">
                  What I keep improving
                </p>
                <p className="mt-2 text-base leading-relaxed text-gray-700">
                  Decision making, system design, communication, and the ability
                  to turn ambiguity into something useful and shippable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
