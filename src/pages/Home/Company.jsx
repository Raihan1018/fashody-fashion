import React from "react";
import Marquee from "react-fast-marquee";

// Renamed imports
import te from "../../assets/company/te.png";
import img8_2 from "../../assets/Company/8_2.png";
import img9_1 from "../../assets/Company/9_1.png";
import zdhc from "../../assets/Company/zdhc.png";

const Company = () => {
  const logos = [te, img8_2, img9_1, zdhc];

  return (
    <div className="py-12 mb-10 bg-[#1B3252] max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-4 mb-10">
        <div className="flex items-center gap-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
          <p className="text-slate-400  font-semibold uppercase tracking-[0.3em] text-xl md:text-2xl lg:text-3xl">
            Global Partners
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
        </div>
      </div>

      <div className="relative w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={false}
          className="flex items-center"
        >
          {/* Mapping logos - ensured enough clones for a smooth loop with larger sizes */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              // Increased Width (w-40 to w-72) and Height (h-20 to h-24)
              className="flex items-center justify-center mx-12 md:mx-20 w-40 md:w-72 h-20 md:h-24"
            >
              <img
                src={logo}
                alt={`Partner ${index}`}
                // Scaled up the image scale and maintained the clean white look
                className="max-w-full max-h-full object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>

        {/* Wider gradients to accommodate the larger logos sliding in */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-72 bg-gradient-to-r from-[#1B3252] via-[#1B3252]/60 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-72 bg-gradient-to-l from-[#1B3252] via-[#1B3252]/60 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default Company;
