import { motion } from "framer-motion";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Changed x to y for smoother mobile entrance
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Ethical = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      // Fixed grid: 1 col on mobile/tablet, 12 cols on desktop
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-12 md:py-20 w-full px-4 max-w-7xl mx-auto"
    >
      {/* LEFT SIDE: Icon */}
      <motion.div
        variants={iconVariants}
        animate="animate"
        // Center on all except LG screens
        className="lg:col-span-5 flex justify-center lg:justify-start order-1"
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 scale-150" />
          <div className="absolute inset-0 rounded-full bg-green-100 blur-3xl opacity-40 group-hover:bg-green-300 transition-colors" />

          {/* Scaled down icon for mobile, large for desktop */}
          <MdLocationPin className="text-7xl md:text-9xl lg:text-[12rem] text-green-600 relative z-10 drop-shadow-2xl" />
        </div>
      </motion.div>

      {/* RIGHT SIDE: Content */}
      <div className="lg:col-span-7 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 order-2">
        <motion.span
          variants={itemVariants}
          className="text-green-600 font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm bg-green-50 px-4 py-1.5 rounded-full"
        >
          Our Global Reach
        </motion.span>

        <motion.h1
          variants={itemVariants}
          // Responsive text sizing and border fix
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.2] lg:leading-[1.1] border-b-4 lg:border-b-0 lg:border-r-8 border-green-500 pb-4 lg:pb-0 lg:pr-6"
        >
          Ethical & Sustainable <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-green-600 to-green-400">
            {" "}
            Solutions
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-5 max-w-2xl">
          <p className="text-base md:text-xl text-slate-600 leading-relaxed font-medium px-2 lg:px-0">
            We believe in doing things right. As a trusted partner for many
            global brands, we consistently champion ethics and transparency.
          </p>
          <p className="text-sm md:text-lg text-slate-500 leading-relaxed border-none lg:border-r border-slate-200 lg:pr-6 px-4 lg:px-0">
            Our open innovation culture encourages suppliers to use
            result-oriented processes while maintaining environmental and social
            sustainability.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
        >
          <Link to="/our-promise" className="w-full">
            <button className="btn w-full sm:w-auto border-none bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white btn-md md:btn-lg px-10 shadow-xl shadow-green-100 transition-all hover:scale-105 active:scale-95">
              Our Promise
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Ethical;
