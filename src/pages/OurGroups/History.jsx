import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineInformationCircle, HiX } from "react-icons/hi";

const historyData = [
  {
    year: "1960s",
    title: "Early Years",
    desc: "Mr. Ahmed Jamal Rawjee was born in Tanzania, East Africa at the start of the 20th century. His entrepreneurial spirit led him to establish a foundational textile presence.",
    fullDesc:
      "Mr. Ahmed Jamal Rawjee's journey began in Tanzania, where he laid the groundwork for a family legacy in textiles. His early ventures in East Africa were defined by a commitment to quality and community, traits that would eventually be inherited by his grandson, Abby Jamal, and form the bedrock of ZXY's corporate culture today.",
  },
  {
    year: "1971",
    title: "The Journey Begins",
    desc: "Born and raised in Mombasa, Kenya, our founder Abby Jamal set off for the U.K. in 1971 to pursue higher education in Textile Technology.",
    fullDesc:
      "In 1971, Abby Jamal transitioned from the vibrant markets of Mombasa to the rigorous academic environment of the United Kingdom. Studying Textile Technology & Management, he combined his practical upbringing with technical expertise, preparing himself for a global career in the apparel supply chain.",
  },
  {
    year: "2001",
    title: "Establishing ZXY",
    desc: "Abby rebrands the company as ZXY Apparel Buying Solutions. The name 'ZXY' was chosen to represent a unique and innovative approach to sourcing.",
    fullDesc:
      "The year 2001 marked the official birth of ZXY. Having identified significant gaps in the global sourcing model, Abby Jamal rebranded his operations to focus on transparency and efficiency. ZXY wasn't just a company; it was a mission to redefine how brands interact with manufacturers in South Asia.",
  },
  {
    year: "2005",
    title: "Strategic Leadership",
    desc: "Riaj joins the executive team, bringing a fresh perspective on operational excellence and supply chain optimization across South Asia.",
    fullDesc:
      "In 2005, Riaj joined the organization, marking a pivotal shift in ZXY's operational strategy. With a focus on streamlining complex supply chains and fostering closer relationships with manufacturing partners, Riaj helped implement the 'Efficiency First' initiative, which significantly reduced lead times for global retail partners.",
  },
  {
    year: "2012",
    title: "Manufacturing Expansion",
    desc: "Under Riaj's guidance, ZXY expanded its footprint into specialized manufacturing units, focusing on high-end knitwear and technical fabrics.",
    fullDesc:
      "2012 was a year of physical growth. Riaj spearheaded the expansion into state-of-the-art manufacturing facilities. By integrating vertical production capabilities, ZXY was able to offer unprecedented quality control. Riaj's insistence on ISO-certified standards ensured that every garment produced met the stringent requirements of the European and US markets.",
  },
  {
    year: "2018",
    title: "Digital Transformation",
    desc: "Riaj led the digital overhaul of ZXY's quality assurance processes, introducing real-time tracking and transparent reporting for all clients.",
    fullDesc:
      "Embracing the Fourth Industrial Revolution, Riaj pioneered the 'ZXY Digital Hub' in 2018. This transformation replaced traditional oversight with cloud-based QA monitoring. Under Riaj's leadership, ZXY became one of the first sourcing partners in the region to offer clients 24/7 real-time visibility into their production lines, solidifying the brand's reputation for radical transparency.",
  },
  {
    year: "2024",
    title: "The Future Vision",
    desc: "Looking ahead, Riaj and the leadership team are committed to 100% sustainable sourcing and carbon-neutral manufacturing by 2030.",
    fullDesc:
      "As ZXY moves toward its third decade, Riaj is leading the charge for a greener future. The current roadmap focuses on circular fashion and ethical labor practices. Riaj's vision is to ensure that ZXY remains not just a leader in fashion sourcing, but a benchmark for global environmental responsibility.",
  },
];

const History = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="history" className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#162A45] text-center mb-16">
          History of Fashody Fashion
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {historyData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card bg-white shadow-md border border-slate-100 h-full p-8 rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-3xl font-black text-[#162A45] mb-1">
                {data.year}
              </h3>
              <p className="text-[#162A45]/60 text-xs font-bold uppercase tracking-widest mb-4">
                {data.title}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {data.desc}
              </p>

              <div className="mt-auto flex justify-end">
                <button
                  onClick={() => setSelectedItem(data)}
                  className="flex items-center gap-1 text-xs font-bold text-info hover:underline decoration-2 underline-offset-4"
                >
                  Read More <HiOutlineInformationCircle className="text-lg" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* daisyUI Modal Logic */}
        <AnimatePresence>
          {selectedItem && (
            <div className="modal modal-open flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="modal-box max-w-2xl bg-white p-0 overflow-hidden rounded-2xl shadow-2xl"
              >
                {/* Modal Header with #162A45 Background */}
                <div className="bg-[#162A45] p-6 text-white flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-black">{selectedItem.year}</h3>
                    <p className="text-xs uppercase tracking-tighter opacity-70">
                      {selectedItem.title}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="btn btn-ghost btn-circle text-white hover:bg-white/10"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-8">
                  <p className="text-slate-600 leading-loose text-lg font-medium">
                    {selectedItem.fullDesc}
                  </p>

                  <div className="modal-action mt-8">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="btn bg-[#162A45] text-white hover:bg-[#0d1a2b] border-none px-8"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
              {/* Click outside to close */}
              <div
                className="absolute inset-0 -z-10"
                onClick={() => setSelectedItem(null)}
              ></div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default History;
