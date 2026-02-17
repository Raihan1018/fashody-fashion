import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { containerVariants, itemVariants } from "../../Animation/Motion";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const TheBest = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-16 px-4 overflow-hidden"
    >
      {/* RIGHT SIDE: Content (Now fully left-aligned) */}
      <div className="lg:col-span-8 flex flex-col items-start text-left space-y-8">
        {/* Decorative Tag */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <span className="h-[2px] w-8 bg-green-500 rounded-full" />
          <span className="text-green-600 font-bold uppercase tracking-widest text-xs">
            Future Focused
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 border-l-8 border-green-600 pl-6"
        >
          The Best is <span className=" text-green-500 "> yet </span>
          to Come
        </motion.h1>

        {/* Body Text */}
        <motion.div variants={itemVariants} className="space-y-6 max-w-2xl">
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We continue to improve and evolve our sustainability roadmap,
            driving continuous development and innovation in everything we do.
          </p>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed italic border-l-2 border-slate-100 ">
            Our goal is to always tick as many boxes as possible, while
            advancing our work in responsible product development, ultimately
            converting to preferred fibres.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <Link to="/our-promise" className="w-full sm:w-auto">
            <button className="btn w-full sm:w-auto border-none bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white btn-lg px-10 shadow-xl shadow-green-200 transition-all hover:scale-105 active:scale-95">
              Our Promise
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TheBest;
