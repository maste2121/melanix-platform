import "react";
import { motion } from "framer-motion";
import { PlusCircle, ArrowRight, Leaf, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative pt-32 pb-20 px-6 md:px-20 min-h-screen flex items-center overflow-hidden"
      style={{
        // Premium warm studio background like the reference
        background: `
          radial-gradient(circle at top left, rgba(45, 43, 43, 0.58) 0%, transparent 30%),
          radial-gradient(circle at top right, rgba(35, 34, 34, 0.55) 0%, transparent 25%),
          linear-gradient(
            180deg,
            #efe7de 0%,
            #e7ddd2 35%,
            #e1d6ca 65%,
            #d8ccbf 100%
          )
        `,
      }}
    >
      {/* Smooth vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.08)_100%)] pointer-events-none"></div>

      {/* Soft luxury grain */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      {/* Botanical blurred background left */}
      <div className="absolute left-0 top-24 w-72 h-72 opacity-[0.08] blur-sm pointer-events-none">
        <img
          src="https://www.transparentpng.com/download/leaves/green-leaves-png-images-1.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Botanical blurred background right */}
      <div className="absolute right-0 top-20 w-[420px] h-[420px] opacity-[0.77] blur-md pointer-events-none">
        <img
          src="https://www.transparentpng.com/download/leaves/tropical-leaves-transparent-background-5.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Table/Floor effect */}
      <div
        className="absolute bottom-0 left-0 w-full h-[180px]"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,0) 0%,
              rgba(214,201,189,0.45) 20%,
              rgba(201,186,172,0.75) 100%
            )
          `,
          borderTop: "1px solid rgba(255,255,255,0.35)",
        }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* --- LEFT CONTENT (FIRST GRID) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative" // Added relative to anchor the mobile banner
        >
          {/* MOBILE ONLY BACKGROUND BANNER */}
          <div className="absolute inset-0 -z-10 block lg:hidden opacity-[0.82] blur-[1px]">
            <img
              src="src\assets\bot.png"
              alt="Botanical Background"
              className="w-full h-full object-cover rounded-3xl "
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/30 bg-white/50 mb-6">
            <Sparkles size={12} className="text-[#C5A059]" />
            <span className="text-[#C5A059] font-bold text-[10px] tracking-[0.2em] uppercase">
              The Professional Cosmetics Hub
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 text-[#1A1A1B]">
            Advertise, Sale, <br />
            <span className="italic text-[#C5A059] font-normal">& Grow.</span>
          </h1>

          <p className="text-gray-500 text-lg mb-10 max-w-md font-light leading-relaxed">
            The premium marketplace for independent beauty brands. List your
            products, run professional ads, and reach customers worldwide.
          </p>

          <div className="flex flex-wrap gap-6 mb-12 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-2">
              <Leaf size={14} className="text-green-700" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                100% Natural
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-[#1A1A1B] text-white px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] transition-all duration-500 flex items-center justify-center gap-3 shadow-xl">
              Start Selling{" "}
              <PlusCircle
                size={16}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            </button>

            <button className="group border border-[#1A1A1B] px-10 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A1A1B] hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
              Learn More{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT VISUAL (UNCHANGED) --- */}
        <div className="relative flex justify-center items-center h-[600px]">
          {/* Premium spotlight */}
          <div className="absolute w-[520px] h-[520px] bg-white/50 rounded-full blur-[130px]" />

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5 }}
            src="src\assets\bot.png"
            className="absolute -top-10 right-0 w-64 h-64 object-contain pointer-events-none mix-blend-multiply"
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-30"
          >
            <img
              src="src/assets/bottle.png"
              alt="Melanix Bottle"
              className="h-[550px] object-contain drop-shadow-[0_40px_45px_rgba(0,0,0,0.22)] relative z-10"
            />

            {/* Ground shadow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-10 bg-black/15 blur-2xl rounded-full" />
          </motion.div>

          <motion.img
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            src="src\assets\bottle1.png"
            className="absolute bottom-10 -right-10 w-44 h-44 z-40 drop-shadow-lg"
          />

          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            src="src\assets\bottle2.png"
            className="absolute bottom-20 left-0 w-32 h-32 z-40 drop-shadow-md"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-4 w-28 h-28 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex flex-col items-center justify-center border border-white p-4 text-center z-50"
          >
            <Leaf size={18} className="text-[#C5A059] mb-1" />
            <span className="text-[8px] font-black uppercase tracking-tighter leading-tight text-[#1A1A1B]">
              Ayurvedic <br /> Formula
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 -left-12 w-24 h-24 rounded-full bg-[#1A1A1B] text-white shadow-2xl flex flex-col items-center justify-center p-4 text-center z-50"
          >
            <span className="text-[18px] font-serif italic text-[#C5A059]">
              100%
            </span>
            <span className="text-[8px] font-bold uppercase tracking-widest">
              Natural
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
