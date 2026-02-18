import React from "react";
import { motion } from "framer-motion";
import { GiWorld } from "react-icons/gi";

// Your Imports
import Global from "../../assets/Certificate/Global.png";
import GOTS from "../../assets/Certificate/GOTS.png";
import ZDHC from "../../assets/Certificate/ZDHC.png";

const countryData = [
  {
    name: "Bangladesh",
    certs: [Global, GOTS, ZDHC, Global, GOTS], // Add your imported images here
    points: [
      "Diversified product range including Flat Knit, Shirting, Woven Bottoms, Innerwear, Outerwear, Technical & Fashion Sportswear",
      "Digital design & innovation hub",
      "Sustainable supply chain",
    ],
  },
  {
    name: "Türkiye",
    certs: [Global, ZDHC, GOTS],
    points: [
      "Specialised product capabilities including Teamwear, Premium Lifestyle ranges",
      "Flexible capacity and speed",
      "Digital design & innovation hub",
      "Short transit time to EU",
    ],
  },
  {
    name: "India",
    certs: [GOTS, ZDHC],
    points: [
      "Specialised in sustainable & eco products",
      "Research & innovation hub",
      "Sustainable supply chain",
    ],
  },
  {
    name: "Pakistan",
    certs: [Global, GOTS, ZDHC],
    points: [
      "Specialised in fabrications - fleece & home textile products",
      "Washing innovation hub",
    ],
  },
  {
    name: "Egypt",
    certs: [Global, ZDHC],
    points: [
      "Specialised in cut/sew knits",
      "Rapid transit to EU/US",
      "Duty Free to EU/US",
    ],
  },
];

const GlobalNetwork = () => {
  return (
    <div className="py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-blue-500 pl-6">
          <h2 className="text-3xl md:text-4xl font-black text-[#162A45] flex items-center gap-3">
            <GiWorld className="text-blue-500" />
            Our Global Presence
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {countryData.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`card  shadow-xl border border-slate-100 overflow-hidden ${
                index === 4 ? "lg:col-span-2 lg:max-w-[60%] lg:mx-auto" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side: Points */}
                <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-slate-100">
                  <h3 className="text-2xl font-bold text-[#162A45] mb-4 tracking-tight">
                    {country.name}
                  </h3>
                  <ul className="space-y-3">
                    {country.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Certifications */}
                <div className="w-full md:w-[40%] p-8">
                  <p className="text-xs font-bold text-[#162A45] uppercase tracking-widest mb-6">
                    Certifications:
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {country.certs.map((imgSrc, i) => (
                      <div
                        key={i}
                        className="tooltip tooltip-bottom"
                        data-tip="Certified"
                      >
                        <div className="w-12 h-12 mx-auto rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100 p-2 hover:scale-110 transition-transform cursor-pointer">
                          <img
                            src={imgSrc}
                            alt="certificate"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
