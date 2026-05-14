import React from "react";
import { motion } from "framer-motion";
import { features } from "../../data/siteData";

const FeaturesSection = () => {
  return (
    <section className="relative bg-[#FDFCFB] py-28 px-6 md:px-20 overflow-hidden">
      {/* 1. STUDIO LIGHTING EFFECT (Soft Radial Glow) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E2D9CF] opacity-[0.2] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-[#C5A059] font-bold text-[10px] tracking-[0.4em] uppercase">
              The Professional Choice
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#1A1A1B] leading-tight"
          >
            Empowering <span className="italic">Independent</span> <br />
            <span className="text-[#C5A059]">Beauty Creators</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-gray-400 font-light uppercase tracking-[0.15em] text-[10px] max-w-xl mx-auto leading-loose"
          >
            Verified Marketplace • Global Exposure • Direct Sales
          </motion.p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="relative group cursor-pointer"
            >
              {/* CARD CONTAINER */}
              <div className="relative z-10 p-12 bg-white border border-[#E2D9CF]/30 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_-20px_rgba(197,160,89,0.12)] transition-all duration-700 text-center">
                {/* ICON DESIGN */}
                <div className="mb-10 relative inline-flex items-center justify-center">
                  {/* Decorative soft glow behind icon on hover */}
                  <div className="absolute inset-0 scale-150 bg-[#C5A059]/5 rounded-full blur-xl group-hover:bg-[#C5A059]/20 transition-all duration-700" />

                  <div className="relative z-10 text-[#C5A059] transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-in-out">
                    {/* Cloning the icon to force professional size and weight */}
                    {React.cloneElement(feature.icon, {
                      size: 36,
                      strokeWidth: 1.1,
                    })}
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <h3 className="text-sm font-serif mb-5 uppercase tracking-[0.25em] text-[#1A1A1B] group-hover:text-[#C5A059] transition-colors duration-500">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-[13px] font-light leading-relaxed tracking-wide px-2">
                  {feature.desc}
                </p>

                {/* Corner Decorative Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[1px] border-r-[1px] border-[#C5A059]/0 group-hover:w-8 group-hover:h-8 group-hover:border-[#C5A059]/40 transition-all duration-700" />
              </div>

              {/* Background Shadow Layer */}
              <div className="absolute inset-0 bg-[#C5A059]/5 translate-x-3 translate-y-3 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
