import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaLinkedin } from "react-icons/fa";
import FounderImg from "../../assets/founder.jpeg";
import { Facebook } from "../../Icons/Facebook";
import { LinkedIn } from "../../Icons/Linkedln";
import { WhatsApp } from "../../Icons/WhatsApp";

const Founder = () => {
  return (
    <section className=" py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#162A45] relative inline-block">
            Meet Our Founder
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-blue-500 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-2/5"
          >
            {/* Decorative Background Box */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-200 rounded-3xl -z-10 hidden md:block"></div>

            <div className="card bg-white shadow-2xl rounded-3xl overflow-hidden group">
              <figure className="relative">
                <img
                  src={FounderImg}
                  alt="Riaj"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Social Icons Overlay - Appear on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Facebook Button */}
                    <button className="btn btn-circle btn-sm ">
                      <Facebook size={18} />
                    </button>

                    {/* LinkedIn Button */}
                    <button className="btn btn-circle btn-sm ">
                      <LinkedIn size={18} />
                    </button>

                    {/* WhatsApp Button */}
                    <button className="btn btn-circle btn-sm ">
                      <WhatsApp size={18} />
                    </button>
                  </div>
                </div>
              </figure>
            </div>
          </motion.div>

          {/* Right Side: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#162A45]">
                Riaj Uddin Ahmed
              </h3>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-sm">
                Founder & Managing Director
              </p>
            </div>

            <div className="relative">
              <FaQuoteLeft className="text-4xl text-blue-100 absolute -top-4 -left-6 -z-10" />
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Riaj personal story began in Bangladesh as he was born and
                  raised in Dhaka. lorrem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>

                <p>
                  Over the years, Riaj sourcing had taken him across the globe,
                  providing solutions and adding value to the supply chain.
                  Having experienced the usual sourcing pains first-hand, Riaj
                  decided to create a professional organisation at the source.
                </p>

                <p className="font-medium text-[#162A45]">
                  After relocating to Bangladesh, he founded Fashody Fashion in
                  2001 with a clear mission: to be unique and innovative while
                  redefining global sourcing standards. Today, Riaj’s vision
                  empowers a team of over 700 colleagues across the globe.
                </p>
              </div>
            </div>

            {/* Signature / Values Badge */}
            <div className="pt-6 flex items-center gap-4">
              <div className="badge badge-outline border-[#162A45] text-[#162A45] p-4 font-bold">
                Passion for Perfection
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
