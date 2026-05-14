import "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-32 bg-[#FAF9F6] text-[#1A1A1B] overflow-hidden">
      {/* 1. STUDIO LIGHTING: Soft warm glow in the background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E2D9CF] opacity-[0.2] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* --- LEFT SIDE: ETHIOPIAN HERITAGE & INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] font-bold uppercase mb-6 block">
              Highland Heritage
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Visit our <br />{" "}
              <span className="italic text-[#C5A059]">Addis Studio.</span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12 max-w-md">
              Inspired by the ancient botanical wisdom of the Ethiopian
              highlands. Reach out for expert consultation at our flagship
              location in the heart of Addis.
            </p>

            <div className="space-y-10">
              <ContactInfo
                icon={<Mail size={20} />}
                title="Email Support"
                detail="hello@melanix-ethiopia.com"
              />
              <ContactInfo
                icon={<Phone size={20} />}
                title="Phone (Addis Ababa)"
                detail="+251 11 661 0707"
              />
              <ContactInfo
                icon={<MapPin size={20} />}
                title="Flagship Location"
                detail="Bole Road, Getu Commercial Center, Addis Ababa"
              />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: PREMIUM LIGHT FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] border border-[#E2D9CF]/30 relative"
          >
            {/* Form Decorative Border */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#C5A059]/30" />

            <form className="space-y-10">
              <div className="group relative">
                <label className="text-[8px] font-bold tracking-widest text-[#C5A059] uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="ABEBE BIKILA"
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#C5A059] outline-none text-[11px] tracking-[0.1em] transition-all duration-500 uppercase placeholder:text-gray-300"
                />
              </div>

              <div className="group relative">
                <label className="text-[8px] font-bold tracking-widest text-[#C5A059] uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="INFO@DOMAIN.ET"
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#C5A059] outline-none text-[11px] tracking-[0.1em] transition-all duration-500 uppercase placeholder:text-gray-300"
                />
              </div>

              <div className="group relative">
                <label className="text-[8px] font-bold tracking-widest text-[#C5A059] uppercase">
                  Message
                </label>
                <textarea
                  placeholder="HOW CAN OUR BOTANICALS HELP YOU?"
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#C5A059] outline-none text-[11px] tracking-[0.1em] transition-all duration-500 uppercase placeholder:text-gray-300 resize-none"
                />
              </div>

              <button className="group relative w-full overflow-hidden bg-[#1A1A1B] text-white py-6 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-xl shadow-black/10">
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:gap-5 transition-all duration-500">
                  Send Message{" "}
                  <Send
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </span>
                {/* Button Hover Glow */}
                <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for clean Contact Info
const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex items-center gap-6 group cursor-pointer">
    <div className="w-14 h-14 rounded-full bg-white border border-[#E2D9CF]/50 flex items-center justify-center text-[#C5A059] shadow-sm group-hover:bg-[#C5A059] group-hover:text-white group-hover:border-[#C5A059] transition-all duration-500">
      {icon}
    </div>
    <div>
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
        {title}
      </p>
      <p className="text-sm font-semibold tracking-wide text-[#1A1A1B]">
        {detail}
      </p>
    </div>
  </div>
);

export default Contact;
