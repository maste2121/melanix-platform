import "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: <Zap size={24} strokeWidth={1.2} />,
    title: "Melanin Support",
    subtitle: "Pigment Restoration",
    desc: "Targeted melanin activation from the hair follicles for natural color restoration.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.2} />,
    title: "Clean Formulation",
    subtitle: "Safe & Pure",
    desc: "Strictly paraben-free and sulfate-free. Gentle on the scalp, powerful on the hair.",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.2} />,
    title: "Luminous Finish",
    subtitle: "Vibrant Glow",
    desc: "Infused with cold-pressed natural oils for a silk-like shine and smooth texture.",
  },
  {
    icon: <Heart size={24} strokeWidth={1.2} />,
    title: "Ethical Luxury",
    subtitle: "Vegan & Sourced",
    desc: "100% vegan and cruelty-free. Ethically sourced botanicals from the heart of India.",
  },
];

const Benefits = () => {
  return (
    <section className="py-32 bg-[#F9F7F2] px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER AREA */}
        <div className="mb-20 text-center lg:text-left lg:flex items-end justify-between border-b border-gray-200 pb-10">
          <div className="max-w-xl">
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block">
              The Science of Nature
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Clinical Results. <br />{" "}
              <span className="italic text-[#C5A059]">Botanical Soul.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-light mt-6 lg:mt-0 tracking-wide uppercase leading-relaxed">
            Engineered for professional performance. Crafted for your daily
            ritual.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 bg-[#FDFCFB] hover:bg-white transition-all duration-700 relative overflow-hidden"
            >
              {/* Subtle hover background accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="text-[#C5A059] mb-10 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out">
                {b.icon}
              </div>

              <div className="mb-6">
                <span className="text-[#C5A059] text-[8px] font-bold uppercase tracking-[0.2em] mb-2 block opacity-60">
                  {b.subtitle}
                </span>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1B]">
                  {b.title}
                </h4>
              </div>

              <p className="text-gray-500 text-xs leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-500">
                {b.desc}
              </p>

              {/* Decorative Corner Detail */}
              <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-4 h-4 border-r border-b border-[#C5A059]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
