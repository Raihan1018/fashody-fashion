import React from "react";
import { Link } from "react-router-dom";
import { FaIndustry, FaGlobe, FaUsersGear, FaHeadset } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";

const Hero = () => {
    const currentYear = new Date().getFullYear();
  const stats = [
    {
      id: 1,
      number: "140",
      label: "Partner Factories",
      icon: <FaIndustry />,
      bgColor: "bg-white/80", // Using glassmorphism
      borderColor: "border-red-400",
      iconColor: "text-red-500",
    },
    {
      id: 2,
      number: "50+",
      label: "Countries",
      icon: <FaGlobe />,
      bgColor: "bg-white/80",
      borderColor: "border-blue-400",
      iconColor: "text-blue-500",
    },
    {
      id: 3,
      number: "10k",
      label: "Employees",
      icon: <FaUsersGear />,
      bgColor: "bg-white/80",
      borderColor: "border-green-400",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      number: "24/7",
      label: "Support",
      icon: <FaHeadset />,
      bgColor: "bg-white/80",
      borderColor: "border-yellow-400",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    /* Modern Linear Gradient Background */
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50 py-16 lg:py-24 rounded-3xl">
      {/* Decorative Blur Blobs for Modern UI */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />

      <div className="relative flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12">
        {/* ================= LEFT SIDE (60%) ================= */}
        <div className="w-full lg:w-[60%] space-y-8 z-10">
          <div className="inline-block px-4 py-1.5 mb-2 text-sm font-semibold tracking-wide text-green-700 uppercase bg-green-100 rounded-full">
            <span>Sustainable Fashion {currentYear}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Your Global, Local <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Partner
            </span>{" "}
            for <br />
            Sustainable Apparel
          </h1>

          <div className="space-y-4 text-lg md:text-xl text-slate-600 max-w-xl">
            <p className="leading-relaxed">
              We offer sustainable apparel product development and specialised
              global sourcing strategies, combined with compliance excellence
              and intuitive customer service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/product-services">
              <button className="btn border-none bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white btn-lg px-10 shadow-xl shadow-green-200 transition-all hover:scale-105">
                Product & Services
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-4 text-green-500/20 group">
            <FaRegPaperPlane className="text-6xl md:text-8xl transition-transform duration-700 group-hover:translate-x-full group-hover:-translate-y-full mx-auto " />
          </div>
        </div>

        {/* ================= RIGHT SIDE (40%) ================= */}
        <div className="w-full lg:w-[40%] z-10">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`card backdrop-blur-md ${stat.bgColor} shadow-xl border border-white/50 border-b-4 ${stat.borderColor} transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="card-body p-6 items-center text-center">
                  <div
                    className={`p-3 rounded-2xl bg-slate-50 ${stat.iconColor} text-3xl mb-2 shadow-inner`}
                  >
                    {stat.icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                    {stat.number}
                  </h2>
                  <p className="text-[10px] md:text-xs uppercase font-bold text-slate-400 tracking-widest leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
