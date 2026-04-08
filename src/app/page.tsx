import HomePage from "@varel-web/app/pages/home/page";
import AboutPage from "@varel-web/app/pages/about/page";
import ProjectPage from "@varel-web/app/pages/project/page";
import ContactPage from "@varel-web/app/pages/contact/page";
import ExperiencePage from "@varel-web/app/pages/experience/page";

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

      <section id="contact" className={sectionClassName}>
        <ContactPage />
      </section>

      <section id="about" className={sectionClassName}>
        <AboutPage />
      </section>
    </div>
  );
}
