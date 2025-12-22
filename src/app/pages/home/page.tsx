"use client";

import { ProfileImage } from "@varel-web/components";
import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const HomePage = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12 md:p-10 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <ProfileImage />

        <div className="text-center md:text-left">
          <h3
            className="
              uppercase font-extrabold text-black leading-tight
              text-3xl
              sm:text-4xl
              md:text-[42px]
              lg:text-[55px]
            "
          >
            Varelandito Caesar Wahyu
          </h3>

          <p className="italic text-[#767676] text-sm md:text-base my-5 md:my-7 max-w-md mx-auto md:mx-0">
            Software Engineer based in Jakarta, Indonesia and happy to travel
            all the world to capture photos.
          </p>

          <div className="flex justify-center md:justify-start gap-5 mt-4 text-gray-700 text-lg md:text-xl">
            <a
              href={process.env.LINK_TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-black"
            >
              <FaXTwitter />
            </a>
            <a
              href={process.env.LINK_TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-black"
            >
              <FaInstagram />
            </a>
            <a
              href={process.env.LINK_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-black"
            >
              <FaDiscord />
            </a>
            <a
              href={process.env.LINK_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-black"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
