import { motion } from "framer-motion";
import Global from "../../assets/Certificate/Global.png";
import gots from "../../assets/Certificate/GOTS.png";
import zdhc from "../../assets/Certificate/ZDHC.png";

const Certificate = () => {
  const certificates = [
    { src: Global, alt: "Global Certificate" },
    { src: gots, alt: "GOTS Certificate" },
    { src: zdhc, alt: "ZDHC Certificate" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#243B5C] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-blue-400">Certifications</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              The certifications we have attained for our supply base, products
              and practices give you the confidence that your brand is sourcing
              using the best partners and techniques.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 grid grid-cols-3 gap-4 md:gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-center aspect-square shadow-lg"
              >
                <img
                  className="w-full h-auto object-contain filter brightness-110 drop-shadow-md"
                  src={cert.src}
                  alt={cert.alt}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
