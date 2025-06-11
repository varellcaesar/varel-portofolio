"use client";

import IMAGES from "@varel-web/public/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";

// Base path dengan gelombang organik yang lebih dinamis
const basePaths = [
  // Path 1 - Bentuk oval dengan tonjolan kanan
  "M65,-45C78,-32,82,-12,79,6C76,24,66,40,52,52C38,64,20,72,0,75C-20,78,-40,75,-56,68C-72,61,-84,50,-88,36C-92,22,-88,6,-81,-12C-74,-30,-64,-50,-48,-63C-32,-76,-12,-82,8,-85C28,-88,56,-88,65,-45Z",

  // Path 2 - Gelombang ke bawah kanan
  "M48,-68C62,-55,66,-35,64,-17C62,1,54,17,44,30C34,43,22,53,8,58C-6,63,-22,63,-36,58C-50,53,-62,43,-70,30C-78,17,-82,1,-80,-17C-78,-35,-70,-55,-56,-68C-42,-81,-21,-87,0,-87C21,-87,42,-81,48,-68Z",

  // Path 3 - Bentuk seperti tetesan air
  "M38,-58C52,-46,56,-26,54,-8C52,10,44,26,34,39C24,52,12,62,-2,67C-16,72,-32,72,-46,67C-60,62,-72,52,-78,39C-84,26,-84,10,-80,-8C-76,-26,-68,-46,-54,-58C-40,-70,-20,-74,0,-74C20,-74,40,-70,38,-58Z",

  // Path 4 - Gelombang ke kiri dengan lekukan
  "M42,-52C58,-40,62,-20,60,-2C58,16,50,32,40,45C30,58,18,68,4,73C-10,78,-26,78,-40,73C-54,68,-66,58,-72,45C-78,32,-78,16,-74,-2C-70,-20,-62,-40,-48,-52C-34,-64,-17,-68,0,-68C17,-68,34,-64,42,-52Z",

  // Path 5 - Bentuk asimetris dengan gelombang besar
  "M72,-38C85,-25,89,-5,86,13C83,31,73,47,59,59C45,71,27,79,7,82C-13,85,-35,83,-53,76C-71,69,-85,57,-91,43C-97,29,-95,13,-88,-5C-81,-23,-69,-43,-53,-56C-37,-69,-17,-75,3,-78C23,-81,59,-81,72,-38Z",

  // Path 6 - Gelombang diagonal dengan lekukan dalam
  "M35,-62C48,-50,52,-30,50,-12C48,6,40,22,30,35C20,48,8,58,-6,63C-20,68,-36,68,-50,63C-64,58,-76,48,-82,35C-88,22,-88,6,-84,-12C-80,-30,-72,-50,-58,-62C-44,-74,-22,-78,0,-78C22,-78,44,-74,35,-62Z",

  // Path 7 - Bentuk seperti kacang dengan pinggang
  "M58,-48C70,-35,74,-15,72,3C70,21,62,37,52,50C42,63,30,73,16,78C2,83,-14,83,-28,78C-42,73,-54,63,-62,50C-70,37,-74,21,-72,3C-70,-15,-62,-35,-50,-48C-38,-61,-19,-67,0,-67C19,-67,46,-61,58,-48Z",

  // Path 8 - Gelombang besar ke atas
  "M52,-72C66,-59,70,-39,68,-21C66,-3,58,13,48,26C38,39,26,49,12,54C-2,59,-18,59,-32,54C-46,49,-58,39,-66,26C-74,13,-78,-3,-76,-21C-74,-39,-66,-59,-52,-72C-38,-85,-19,-91,0,-91C19,-91,38,-85,52,-72Z",

  // Path 9 - Bentuk oval memanjang vertikal
  "M45,-55C60,-43,64,-23,62,-5C60,13,52,29,42,42C32,55,20,65,6,70C-8,75,-24,75,-38,70C-52,65,-64,55,-70,42C-76,29,-76,13,-72,-5C-68,-23,-60,-43,-46,-55C-32,-67,-16,-71,0,-71C16,-71,32,-67,45,-55Z",

  // Path 10 - Kembali ke bentuk awal dengan smooth transition
  "M65,-45C78,-32,82,-12,79,6C76,24,66,40,52,52C38,64,20,72,0,75C-20,78,-40,75,-56,68C-72,61,-84,50,-88,36C-92,22,-88,6,-81,-12C-74,-30,-64,-50,-48,-63C-32,-76,-12,-82,8,-85C28,-88,56,-88,65,-45Z",
];

const ProfileImage = () => {
  return (
    <div className="min-w-[400px] min-h-[400px] relative">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full z-0">
        <defs>
          <clipPath id="blobBorderClip">
            <motion.path
              d={basePaths[0]}
              transform="translate(100 100) scale(1.08)"
              animate={{
                d: basePaths,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1], // Smooth organic easing
                repeatType: "loop",
              }}
            />
          </clipPath>
          <clipPath id="blobClip">
            <motion.path
              d={basePaths[0]}
              transform="translate(100 100) scale(1.0)"
              animate={{
                d: basePaths,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1], // Same smooth easing
                repeatType: "loop",
              }}
            />
          </clipPath>
        </defs>

        {/* Transparent border with duplicated profile image */}
        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#blobBorderClip)"
        >
          <div className="w-full h-full">
            <Image
              src={IMAGES.VarelProfileJPG}
              alt="Profile Border"
              className="opacity-70"
            />
          </div>
        </foreignObject>
      </svg>

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full z-10"
      >
        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#blobClip)"
        >
          <div className="w-full h-full">
            <Image src={IMAGES.VarelProfileJPG} alt="Profile" />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};
export default ProfileImage;
