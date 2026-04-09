import type { Metadata } from "next";
import HomePage from "@varel-web/app/pages/home/page";
import AboutPage from "@varel-web/app/pages/about/page";
import ProjectPage from "@varel-web/app/pages/project/page";
import ContactPage from "@varel-web/app/pages/contact/page";
import ExperiencePage from "@varel-web/app/pages/experience/page";
import { createMetadata } from "@varel-web/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Software Engineer Portfolio",
  description:
    "Explore the portfolio of Varelandito Caesar Wahyu, a Jakarta-based software engineer building web and mobile products with product thinking, clean systems, and reliable execution.",
  path: "/",
});

export default function RootPage() {
  const sectionClassName =
    "snap-start min-h-[calc(100vh-72px)] md:min-h-screen flex";

  return (
    <div className="w-full">
      <section id="home" className={sectionClassName}>
        <HomePage />
      </section>

      <section id="experience" className={sectionClassName}>
        <ExperiencePage />
      </section>

      <section id="project" className={sectionClassName}>
        <ProjectPage />
      </section>

      <section id="about" className={sectionClassName}>
        <AboutPage />
      </section>

      <section id="contact" className={sectionClassName}>
        <ContactPage />
      </section>
    </div>
  );
}
