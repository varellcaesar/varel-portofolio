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
    <main className="flex-1 flex items-center justify-center p-10 w-full">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image with Animated Border */}
        <ProfileImage />

        {/* Profile Details */}
        <div className="text-center md:text-left">
          <h3 className="uppercase text-black font-extrabold text-[55px] leading-none">
            Varelandito Caesar Wahyu
          </h3>
          <p className="italic text-[#767676] text-base my-7">
            Software Engineer based in Jakarta, Indonesia and happy to travel all the World
            to capture photos.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-5 mt-4 text-gray-700 text-xl">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaDiscord />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
