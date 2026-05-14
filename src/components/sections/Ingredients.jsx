import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ingredients = [
  {
    name: "Amla",
    desc: "Natural antioxidant for pigment",
    // Providing multiple images for the animation cycle
    images: ["src/assets/amla1.jpg", "src/assets/amla2.jpg"],
  },
  {
    name: "Rosemary",
    desc: "Stimulates root health",
    images: ["src/assets/rose1.jpg", "src/assets/rose2.jpg"],
  },
  {
    name: "Hibiscus",
    desc: "Strengthens hair keratin",
    images: ["src/assets/hb1.jpg", "src/assets/hb2.jpg"],
  },
];

// Inner component to handle the image cycling logic
const IngredientCard = ({ ing, index }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % ing.images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [ing.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="text-center group"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative w-64 h-64 mx-auto mb-10">
        {/* Decorative Gold Ring */}
        <div className="absolute inset-0 rounded-full border border-[#C5A059]/20 scale-110 group-hover:scale-125 transition-transform duration-700" />

        <div className="w-full h-full bg-white rounded-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center p-10 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={ing.images[imgIndex]}
              alt={ing.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </AnimatePresence>
        </div>

        {/* Floating Particle Decor */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-2 -right-2 w-4 h-4 bg-[#C5A059]/20 rounded-full blur-sm"
        />
      </div>

      {/* TEXT CONTENT */}
      <h3 className="text-xl font-serif mb-3 tracking-[0.2em] text-[#1A1A1B] uppercase group-hover:text-[#C5A059] transition-colors duration-500">
        {ing.name}
      </h3>
      <div className="w-8 h-[1px] bg-[#C5A059] mx-auto mb-4" />
      <p className="text-gray-500 text-xs font-light uppercase tracking-widest leading-relaxed px-4">
        {ing.desc}
      </p>
    </motion.div>
  );
};

const Ingredients = () => (
  <section className="py-32 bg-[#FDFCFB] text-[#1A1A1B] overflow-hidden relative">
    {/* Abstract Background Detail */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#C5A059] text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block"
        >
          Pure. Potent. Proven.
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-serif italic mb-6">
          Born from the Earth
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 font-light text-sm leading-relaxed">
          We travel the world to source the finest Ayurvedic botanicals,
          extracted at their peak potency for professional hair restoration.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
        {ingredients.map((ing, i) => (
          <IngredientCard key={i} ing={ing} index={i} />
        ))}
      </div>

      {/* BOTTOM CTA FOR INGREDIENTS */}
      <div className="mt-24 text-center">
        <button className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#C5A059] pb-2 hover:text-[#C5A059] transition-all duration-300">
          View Full Ingredient Glossary
        </button>
      </div>
    </div>
  </section>
);

export default Ingredients;
