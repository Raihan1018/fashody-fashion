import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Anuj",
    role: "COO",
    bio: "Describing himself as 'relentless, practical, sensitive, and disciplined,' Anuj appreciates the human mind and values people who have integrity in their work.",
    img: "https://i.pravatar.cc/400?img=68",
  },
  {
    name: "Betty",
    role: "Country Head, India",
    bio: "Betty leads our India team, bringing over 30 years of experience in apparel marketing and merchandising. Passionate and spirited, she thrives on creativity and compassion.",
    img: "https://i.pravatar.cc/400?img=45",
  },
  {
    name: "Gargi",
    role: "Global Design",
    bio: "Gargi is unabashed and candid, and can be relied on to 'tell it like it is.' She loves to laugh and feels infinitely grateful for the dynamic and creative route her life has taken.",
    img: "https://i.pravatar.cc/400?img=32",
  },
  {
    name: "Julian",
    role: "Business Lead",
    bio: "Julian has worked in technical operational roles and uses his experience to be the product and innovation lead for the organization.",
    img: "https://i.pravatar.cc/400?img=11",
  },
];

const MeetOurTeam = () => {
  return (
    <section id="meetOurTeam" className="py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#162A45] mb-2">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Swiper Container */}
        <div className="relative px-4 md:px-20">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            speed={800}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="team-swiper !pb-14 !pt-10"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[320px] md:max-w-[450px]"
              >
                {({ isActive }) => (
                  <div
                    className={`card bg-white shadow-xl rounded-xl transition-all duration-500 border border-slate-100 h-full ${isActive ? "scale-105 opacity-100" : "opacity-40 scale-90"}`}
                  >
                    <div className="p-8 flex flex-col items-center text-center">
                      {/* Member Image Wrapper */}
                      <div className="relative group mb-6">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner">
                          <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>

                        {/* Social Buttons (Your Fixed Design) */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <button className="btn btn-circle btn-xs bg-white shadow-md border-none text-[#1877F2] hover:scale-110">
                            <FaFacebookF />
                          </button>
                          <button className="btn btn-circle btn-xs bg-white shadow-md border-none text-[#0A66C2] hover:scale-110">
                            <FaLinkedinIn />
                          </button>
                          <button className="btn btn-circle btn-xs bg-white shadow-md border-none text-[#25D366] hover:scale-110">
                            <FaWhatsapp />
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-[#162A45] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-4">
                        {member.role}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-4 md:line-clamp-none">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-md hover:bg-[#162A45] hover:text-white transition-all text-[#162A45]">
            <IoArrowBack size={20} />
          </div>
          <div className="button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-md hover:bg-[#162A45] hover:text-white transition-all text-[#162A45]">
            <IoArrowForward size={20} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .team-swiper .swiper-pagination-bullet-active {
          background-color: #162a45 !important;
          width: 24px;
          border-radius: 4px;
        }
        .swiper-slide {
          transition: 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default MeetOurTeam;
