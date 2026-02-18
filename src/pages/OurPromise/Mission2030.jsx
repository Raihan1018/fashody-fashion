import React from "react";
import { motion } from "framer-motion";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const Mission2030 = () => {
  return (
    <section className="py-24 bg-[#162A45] text-white overflow-hidden mb-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest">
              <HiOutlineRocketLaunch className="text-lg" />
              The Future Roadmap
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Looking towards <br />
              <span className="text-blue-500">2030</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              As we move toward the next decade, ZXY is committed to a future
              where sustainability and innovation are inseparable. Our mission
              is to achieve carbon neutrality across our global operations and
              ensure 100% of our materials are ethically sourced by 2030.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-2xl font-bold">100%</h4>
                <p className="text-sm text-slate-400">Circular Fashion</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-2xl font-bold">Net Zero</h4>
                <p className="text-sm text-slate-400">Carbon Footprint</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group">
              {/* Replace VIDEO_ID with your actual YouTube ID */}
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/H41fuhz_gvw"
                title="Mission 2030 Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission2030;
