import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaHandshake, FaUsers, FaHeart } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const visionData = [
  {
    title: "Partnership",
    subtitle: "Environmental Goal",
    icon: <FaHandshake className="text-5xl text-blue-500 mb-4" />,
    desc: "As part of our commitment to environmental improvement, we partner with suppliers committed to responsibility and invest in house environmental practices like waste reduction and ecological certifications.",
    footerText:
      "Our compliance team constantly assesses and scales up our supply chain with the latest ethical guidelines.",
  },
  {
    title: "People",
    subtitle: "Community Goal",
    icon: <FaUsers className="text-5xl text-blue-500 mb-4" />,
    desc: "We continuously invest in maintaining a positive impact on the people living and working in our regional locations. In collaboration with suppliers, our teams strive to develop best practices.",
    footerText:
      "In addition, our CSR team and 7 STREAMS Foundation work with factories and brands on projects that make a real difference.",
  },
  {
    title: "Passion",
    subtitle: "Product Goal",
    icon: <FaHeart className="text-5xl text-blue-500 mb-4" />,
    desc: "Passion for innovation is what always drives and motivates us, taking pride in innovating sustainable low-impact materials to reduce the environmental impact of our products.",
    footerText:
      "Our innovation team tirelessly works with subject experts and industry consultants to always develop sustainable proposals.",
  },
];

const OurVision = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#162A45] mb-4">
            Our Vision
          </h2>
          <p className="text-[#162A45]/70 font-medium max-w-2xl mx-auto">
            Our vision always has and will always be anchored in People,
            Passion, and Partnership.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 3D Slider Container */}
        <div className="relative max-w-6xl mx-auto px-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={1}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".vision-next",
              prevEl: ".vision-prev",
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="!pb-20 !pt-10"
          >
            {visionData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[350px] md:max-w-[600px]"
              >
                {({ isActive }) => (
                  <div
                    className={`card bg-white shadow-2xl rounded-2xl border border-slate-100 transition-all duration-500 p-8 md:p-12 h-full flex flex-col items-center text-center ${isActive ? "opacity-100" : "opacity-40 grayscale scale-90"}`}
                  >
                    {/* Icon and Title Group */}
                    <div className="flex flex-col items-center mb-6">
                      {item.icon}
                      <h3 className="text-3xl font-black text-[#162A45]">
                        {item.title}
                      </h3>
                      <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mt-1">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Content Body */}
                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {item.desc}
                      </p>
                      <p className="text-slate-500 leading-relaxed text-xs md:text-sm border-t border-slate-100 pt-6">
                        {item.footerText}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation buttons fixed to the slider center */}
          <button className="vision-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#162A45] hover:bg-[#162A45] hover:text-white transition-all">
            <IoArrowBack size={24} />
          </button>
          <button className="vision-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#162A45] hover:bg-[#162A45] hover:text-white transition-all">
            <IoArrowForward size={24} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #162a45 !important;
        }
      `}</style>
    </section>
  );
};

export default OurVision;
