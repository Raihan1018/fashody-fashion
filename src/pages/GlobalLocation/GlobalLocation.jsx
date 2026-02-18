import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Company from "../Home/Company";

const locationData = [
  {
    id: "eg", // Egypt
    country: "Egypt",
    city: "Alexandria",
    flag: "🇪🇬",
    address: "Alexandria, Egypt",
    services: ["Production"],
    color: "#3b82f6", // Brand Blue
  },
  {
    id: "tr", // Türkiye
    country: "Türkiye",
    city: "Istanbul",
    flag: "🇹🇷",
    address:
      "Senlikkoy Mah. Florya Cad. Corner Plaza No: 67 Florya TR-34153 Istanbul",
    services: [
      "Showroom",
      "Production",
      "Sourcing",
      "Design & Innovation",
      "Business Development",
    ],
    color: "#3b82f6",
  },
  {
    id: "bd", // Bangladesh
    country: "Bangladesh",
    city: "Dhaka",
    flag: "🇧🇩",
    address: "89/1 Pragati Sharani (Cha), North Badda, Dhaka 1212",
    services: [
      "Showroom",
      "Production",
      "Sourcing",
      "Design & Innovation",
      "Business Development",
    ],
    color: "#3b82f6",
  },
  {
    id: "in", // India
    country: "India",
    city: "Tirupur",
    flag: "🇮🇳",
    address:
      "8/3809 D1, JP Nagar 3rd Street, Kaathampalayam Pirivu, PN Road, Pooluvapatti, Tirupur 641 602",
    services: ["Showroom", "Production", "Sourcing", "Design & Innovation"],
    color: "#3b82f6",
  },
  {
    id: "pk", // Pakistan
    country: "Pakistan",
    city: "Lahore",
    flag: "🇵🇰",
    address: "Plot No. 99, Sardar Town, Bhabtian Raiwind Road, Lahore",
    services: ["Showroom", "Production", "Sourcing"],
    color: "#3b82f6",
  },
];

const GlobalLocations = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Bangladesh

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#162A45] mb-12">
          Global Locations
        </h2>

        {/* Dynamic Country Map Section */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 h-[300px] md:h-[450px] flex items-center justify-center">
          {/* We use an SVG where specific paths are controlled by state */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World Map Base Layer (Simplified path example) */}
            <path d="M0 0h1000v500H0z" fill="transparent" />

            {/* Background Map - Using a high-quality placeholder for the visual */}
            <image
              href="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
              width="1000"
              height="500"
              className="grayscale opacity-20"
            />

            {/* THE MAGIC: Highlighted Country Overlay */}
            {/* You can replace these circles with actual SVG paths for perfect country shapes */}
            {locationData.map((loc, index) => (
              <motion.circle
                key={loc.id}
                cx={
                  index === 0
                    ? 550
                    : index === 1
                      ? 565
                      : index === 2
                        ? 690
                        : index === 3
                          ? 675
                          : 655
                }
                cy={
                  index === 0
                    ? 210
                    : index === 1
                      ? 180
                      : index === 2
                        ? 240
                        : index === 3
                          ? 280
                          : 215
                }
                r={activeIndex === index ? 15 : 4}
                fill={activeIndex === index ? "#3b82f6" : "#cbd5e1"}
                initial={false}
                animate={{
                  r: activeIndex === index ? 18 : 5,
                  fill: activeIndex === index ? "#3b82f6" : "#94a3b8",
                  opacity: activeIndex === index ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            ))}
          </svg>

          {/* Country Name Floating Label */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200 shadow-sm">
            <span className="text-[#162A45] font-bold uppercase tracking-widest text-sm">
              Currently Viewing: {locationData[activeIndex].country}
            </span>
          </div>
        </div>

        {/* 3D Swiper Slider */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={2}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="!pb-16"
          >
            {locationData.map((loc, index) => (
              <SwiperSlide key={loc.id} className="max-w-[320px]">
                <div
                  className={` rounded-2xl shadow-xl border border-slate-100 p-8 transition-all duration-500 ${
                    activeIndex === index
                      ? "opacity-100 scale-105"
                      : "opacity-40 grayscale scale-90"
                  }`}
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <span className="text-3xl mb-2">{loc.flag}</span>
                    <h3 className="text-2xl font-black text-[#162A45]">
                      {loc.country}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm">
                      {loc.city}
                    </p>
                  </div>

                  {/* Services with Color Coded Dots */}
                  <div className="grid grid-cols-2 gap-y-3 mb-8 text-[10px] font-bold uppercase tracking-tighter">
                    {loc.services.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-[11px] text-slate-500 leading-relaxed mb-6">
                    {loc.address}
                  </p>

                  <div className="flex flex-col gap-2">
                    <button className="btn btn-sm bg-[#162A45] hover:bg-[#1d3557] text-white border-none normal-case">
                      Contact
                    </button>
                    <button className="btn btn-sm btn-outline border-[#162A45] text-[#162A45] hover:bg-slate-100 normal-case">
                      360° View
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Company/>
    </section>
  );
};

export default GlobalLocations;
