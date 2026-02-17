import React from "react";
import { Link } from "react-router-dom";
import { FaIndustry, FaGlobe, FaUsersGear, FaHeadset } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../Animation/Motion";

const Hero = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for staggered children
  //   const containerVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //       opacity: 1,
  //       transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  //     },
  //   };

  //   const itemVariants = {
  //     hidden: { y: 20, opacity: 0 },
  //     visible: {
  //       y: 0,
  //       opacity: 1,
  //       transition: { duration: 0.6, ease: "easeOut" },
  //     },
  //   };

  const stats = [
    {
      id: 1,
      number: "140",
      label: "Partner Factories",
      icon: <FaIndustry />,
      borderColor: "border-red-400",
      iconColor: "text-red-500",
    },
    {
      id: 2,
      number: "5",
      label: "Regional Offices",
      icon: <FaGlobe />,
      borderColor: "border-blue-400",
      iconColor: "text-blue-500",
    },
    {
      id: 3,
      number: "10k",
      label: "Employees",
      icon: <FaUsersGear />,
      borderColor: "border-green-400",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      number: "24/7",
      label: "Support",
      icon: <FaHeadset />,
      borderColor: "border-yellow-400",
      iconColor: "text-yellow-600",
    },
  ];

  return (
    <div className="relative overflow-hidden my-4">
      {/* Background Blobs with subtle floating animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-green-100/50 rounded-full blur-3xl -z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-blue-100/50 rounded-full blur-3xl -z-0"
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT SIDE: Text Content */}
        <motion.div
          className="w-full lg:w-[60%] space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 text-xs md:text-sm font-semibold tracking-widest text-green-700 uppercase bg-green-100 rounded-full"
          >
            Sustainable Fashion {currentYear}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
          >
            Your Global, Local <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              Partner
            </span>{" "}
            for <br className="hidden sm:block" />
            Sustainable Apparel
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            We offer sustainable apparel product development and specialised
            global sourcing strategies, combined with compliance excellence and
            intuitive customer service.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            We strive to always bring newness and innovation to our work,
            offering an extensive multi-category product range, manufactured in
            over 100 fully compliant partner factories.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link to="/product-services" className="w-full sm:w-auto">
              <button className="btn w-full sm:w-auto border-none bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white btn-lg px-10 shadow-xl shadow-green-200 transition-all hover:scale-105 active:scale-95">
                Product & Services
              </button>
            </Link>
          </motion.div>

          {/* Animated Paper Plane */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center text-green-500/20 group  pt-4 w-fit"
          >
            {/* The Plane Wrapper */}
            <motion.div
              animate={{
                y: [0, -15, 0], // Gentle floating up and down
                rotate: [0, 5, 0], // Slight tilting
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaRegPaperPlane className="text-6xl md:text-8xl transition-colors duration-300 group-hover:text-green-500/40" />
            </motion.div>

            {/* Optional "Wind" Lines that appear on hover */}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Stats Cards */}
        <motion.div
          className="w-full lg:w-[40%]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`card bg-white/70 backdrop-blur-lg shadow-xl border border-white/50 border-b-4 ${stat.borderColor} rounded-3xl`}
              >
                <div className="card-body p-5 md:p-6 items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className={`p-3 md:p-4 rounded-2xl bg-slate-50 ${stat.iconColor} text-2xl md:text-3xl mb-2 shadow-inner`}
                  >
                    {stat.icon}
                  </motion.div>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight">
                    {stat.number}
                  </h2>
                  <p className="text-[9px] md:text-[11px] uppercase font-bold text-slate-400 tracking-widest leading-tight">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
