import { motion } from "framer-motion";

const AboutUs = () => (
  <section className="py-24 px-6 md:px-20 grid lg:grid-cols-2 gap-16 items-center">
    <div className="relative group">
      <div className="absolute -inset-4 border border-[#C5A059]/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
      <img
        src="src\assets\bottle2.png"
        alt="Botanical Heritage"
        className="relative z-10 w-full h-[600px] object-cover grayscale-[20%]"
      />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-[#C5A059] text-[10px] tracking-[0.3em] font-bold uppercase">
        Our Heritage
      </span>
      <h2 className="text-4xl md:text-6xl font-serif mt-6 mb-8">
        Pure Science, <br />{" "}
        <span className="italic text-[#C5A059]">Ancient Wisdom.</span>
      </h2>
      <p className="text-gray-500 leading-relaxed mb-8 font-light italic">
        "We started Melanix with a single goal: to prove that nature has the
        power to reverse time. No chemicals, just the pure essence of the
        earth."
      </p>
      <p className="text-gray-600 leading-relaxed mb-10">
        Our journey took us deep into the heart of India, where we rediscovered
        Ayurvedic secrets that have been forgotten for centuries. Today, we
        bring those secrets to you.
      </p>
      <button className="border-b-2 border-[#1A1A1B] pb-1 text-[10px] font-bold tracking-widest uppercase hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
        Discover the Story
      </button>
    </motion.div>
  </section>
);

export default AboutUs;
