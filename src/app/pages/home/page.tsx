import type { ReactNode } from "react";
import { ProfileImage } from "@varel-web/components";
import {
  FaInstagram,
  FaDiscord,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const HomePage = () => {
  const socialLinks = [
    {
      href: process.env.LINK_TWITTER,
      label: "X / Twitter",
      icon: <FaXTwitter />,
    },
    {
      href: process.env.LINK_INSTAGRAM,
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      href: process.env.LINK_DISCORD,
      label: "Discord",
      icon: <FaDiscord />,
    },
    {
      href: process.env.LINK_LINKEDIN,
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
  ].filter(
    (link): link is { href: string; label: string; icon: ReactNode } =>
      Boolean(link.href)
  );

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12 md:p-10 w-full">
      <div className="hero-blob-a pointer-events-none absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.24),_rgba(251,146,60,0))] blur-2xl" />
      <div className="hero-blob-b pointer-events-none absolute bottom-[14%] right-[10%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(31,41,55,0.14),_rgba(31,41,55,0))] blur-3xl" />

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 relative z-10">
        <div className="hero-scale-in">
          <ProfileImage />
        </div>

        <div className="text-center md:text-left max-w-xl">
          <h3
            className="
              hero-fade-up
              uppercase font-extrabold text-black leading-tight
              text-3xl
              sm:text-4xl
              md:text-[42px]
              lg:text-[55px]
            "
          >
            Varelandito Caesar Wahyu
          </h3>

          <p className="hero-fade-up hero-delay-1 italic text-[#767676] text-sm md:text-base my-5 md:my-7 max-w-md mx-auto md:mx-0">
            Software Engineer based in Jakarta, Indonesia and happy to travel
            all the world to capture photos.
          </p>

          <div className="hero-fade-up hero-delay-2 flex justify-center md:justify-start gap-5 mt-4 text-gray-700 text-lg md:text-xl">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="hero-social-link transition-all duration-300 hover:-translate-y-1 hover:text-black"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="hero-fade-up hero-delay-3 mt-10 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.34em] text-[#9CA3AF] md:justify-start">
            <span>Scroll</span>
            <span className="hero-scroll-line h-px w-12 bg-[#1F2937]/40" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
