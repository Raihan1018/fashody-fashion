import { motion } from "framer-motion";

const OurValues = () => {
  // Animation variants for a staggered entrance effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-base-100 py-20 lg:py-32">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-green-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-green-500 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 text-center max-w-4xl"
      >
        {/* Animated Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-base-content"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#162A45]">
            Values
          </span>
        </motion.h2>

        {/* Decorative Divider */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-10"
        >
          <div className="h-1.5 w-24 rounded-full bg-primary/20 flex justify-center items-center">
            <div className="h-1.5 w-8 rounded-full bg-green-600"></div>
          </div>
        </motion.div>

        {/* First Paragraph: High Emphasis */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-base-content/80  leading-relaxed mb-8"
        >
          Creating positive impact has always been at the heart of our culture
          as a company. Our strategic approach really began in 2000, when we
          rolled out our Social and Ethical Compliance blueprint across our
          global supply base.
        </motion.p>

        {/* Second Paragraph: Standard Text */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-base-content/80 leading-relaxed mb-8"
        >
          We are committed to working with leading industry eco-communities to
          further develop our preferred fibre portfolio, and improving industry
          practices to bring positive environmental and societal changes for our
          communities.
        </motion.p>

        {/* Optional Action Hint */}
        <motion.div variants={itemVariants} className="mt-12">
          <button className="btn btn-ghost btn-sm animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurValues;
