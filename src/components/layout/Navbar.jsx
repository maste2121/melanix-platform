import { useState, useEffect } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background on scroll for a professional feel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 flex justify-between items-center border-b ${
        scrolled
          ? "bg-[#1A1A1B]/95 backdrop-blur-md border-white/10 py-3 shadow-2xl"
          : "bg-[#1A1A1B] border-white/5"
      }`}
    >
      {/* 1. LOGO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col leading-tight cursor-pointer group"
      >
        <span className="text-xl md:text-2xl font-serif tracking-[0.3em] font-bold text-white group-hover:text-[#C5A059] transition-colors duration-300">
          MELANIX
        </span>
        <span className="text-[7px] tracking-[0.4em] uppercase text-gray-400 font-bold group-hover:text-gray-300 transition-colors">
          Natural Hair Care
        </span>
      </motion.div>

      {/* 2. DESKTOP NAVIGATION */}
      <div className="hidden lg:flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`relative pb-1 transition-all duration-300 group ${
              link.label === "Home"
                ? "text-[#C5A059]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {link.label}
            {/* Animated Gold Underline */}
            <span
              className={`absolute bottom-0 left-0 h-[1px] bg-[#C5A059] transition-all duration-500 ${
                link.label === "Home" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        ))}
      </div>

      {/* 3. UTILITY SECTION (Icons) */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="hidden sm:flex items-center gap-6 text-gray-300">
          <button className="hover:text-[#C5A059] transition-colors duration-300">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="hover:text-[#C5A059] transition-colors duration-300">
            <User size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart with Badge */}
        <button className="relative text-gray-300 hover:text-[#C5A059] transition-colors duration-300">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-lg">
            0
          </span>
        </button>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden text-white hover:text-[#C5A059] transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 4. MOBILE NAVIGATION OVERLAY (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 w-full bg-[#1A1A1B] border-t border-white/5 flex flex-col items-center gap-8 py-12 lg:hidden shadow-2xl overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={link.label}
                href={link.href}
                className="text-[12px] font-bold tracking-[0.3em] uppercase text-gray-300 hover:text-[#C5A059]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-8 mt-4 pt-8 border-t border-white/5 w-full justify-center"
            >
              <User size={20} className="text-gray-400" />
              <Search size={20} className="text-gray-400" />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-[#C5A059] text-white px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#b08d4a] transition-all"
            >
              Portal Login
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
