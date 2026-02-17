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
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};



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
const Ethical = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[400px] w-full px-4"
    >
      {/* LEFT SIDE: Icon (Responsive: center on mobile, left on desktop) */}
      <motion.div
        variants={iconVariants}
        animate="animate"
        className="lg:col-span-4 flex justify-center lg:justify-start"
      >
        <div className="relative group">
          {/* Animated Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 scale-150" />
          <div className="absolute inset-0 rounded-full bg-green-100 blur-2xl opacity-40 group-hover:bg-green-300 transition-colors" />

          <MdLocationPin className="text-8xl md:text-[10rem] text-green-600 relative z-10 drop-shadow-2xl" />
        </div>
      </motion.div>

      {/* RIGHT SIDE: Content */}
      <div className="md:col-span-8 flex flex-col items-end text-right space-y-6">
        <motion.span
          variants={itemVariants}
          className="text-green-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm bg-green-50 px-3 py-1 rounded-full"
        >
          Our Global Reach
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] border-r-8 border-green-500 pr-6"
        >
          Ethical & Sustainable <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-green-600 to-green-400">
            Solutions
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-5 max-w-2xl">
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We believe in doing things right. As a trusted partner for many
            global brands, we consistently champion ethics and transparency.
          </p>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed border-r border-slate-200 pr-6">
            Our open innovation culture encourages suppliers to use
            result-oriented processes while maintaining environmental and social
            sustainability.
          </p>
        </motion.div>

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

export default Ethical;
