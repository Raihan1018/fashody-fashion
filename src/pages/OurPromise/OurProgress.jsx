import React from "react";
import { motion } from "framer-motion";

const progressData = [
  {
    percentage: "35%",
    label: "Our total production volume converted to Sustainable Materials",
  },
  {
    percentage: "25%",
    label: "Our Organic Cotton share for total Sustainable Production",
  },
  {
    percentage: "8%",
    label: "Our Recycled Polyester share for total Sustainable Production",
  },
  {
    percentage: "15%",
    label: "Our overall sampling reduction in last 12 months",
  },
  {
    percentage: "8%",
    label:
      "Our overall Energy and Green House Gases (GHGs) reduction in last 12 months",
  },
  { percentage: "5%", label: "Our overall waste reduction in last 12 months" },
  {
    percentage: "30%",
    label: "Our overall waste water reused in last 12 months",
  },
  {
    percentage: "50%",
    label: "Our suppliers using certified chemicals in last 12 months",
  },
];

const OurProgress = () => {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#162A45] mb-4">
            Our Progress So Far
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {progressData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#162A45] mb-4 group-hover:text-blue-500 transition-colors">
                {item.percentage}
              </h3>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProgress;
