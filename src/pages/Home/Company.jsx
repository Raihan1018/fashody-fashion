import { motion } from "framer-motion";

import Global from "../../assets/Company/Global.png";
import GOTS from "../../assets/Company/GOTS.png";
import TextileExchange from "../../assets/Company/TextileExchange.png";
import ISO from "../../assets/Company/ISO.png";
import Higg from "../../assets/Company/Higg.png";
const Company = () => {
  const logos = [Global, GOTS, TextileExchange, ISO, Higg];

  // We double the array to ensure a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="max-w-full mx-auto bg-[#243B5C] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative mb-5">
      {/* Optional: Gradient Overlays for a "Fade-out" edge effect */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#162A45] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#162A45] to-transparent z-10"></div>

      <div className="flex">
        <motion.div
          className="flex flex-none gap-16 md:gap-32 items-center"
          animate={{
            x: ["0%", "-50%"], // Move half of the duplicated list
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-32 md:w-48 h-20 md:h-28 flex items-center justify-center grayscale hover:grayscale-0 brightness-200 transition-all duration-500"
            >
              <img
                src={logo}
                alt={`Certification ${index}`}
                className="max-w-full max-h-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Company;
