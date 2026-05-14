import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

const reviewsData = [
  {
    name: "Sarah J.",
    location: "London, UK",
    text: "Finally a product that doesn't just dye my hair but actually heals the root. My natural dark pigment returned in just 8 weeks.",
    before:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=500&auto=format&fit=crop", // Placeholder for Gray Hair
    after:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500&auto=format&fit=crop", // Placeholder for Dark Hair
  },
  {
    name: "Michael R.",
    location: "New York, USA",
    text: "Significant reduction in gray patches. The texture of my hair is much thicker and the shine is visible from across the room.",
    before:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Sarah J.",
    location: "London, UK",
    text: "Finally a product that doesn't just dye my hair but actually heals the root. My natural dark pigment returned in just 8 weeks.",
    before:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=500&auto=format&fit=crop", // Placeholder for Gray Hair
    after:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500&auto=format&fit=crop", // Placeholder for Dark Hair
  },
  {
    name: "Michael R.",
    location: "New York, USA",
    text: "Significant reduction in gray patches. The texture of my hair is much thicker and the shine is visible from across the room.",
    before:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
];

const BeforeAfterSlider = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <div
      className="relative w-full aspect-[4/5] overflow-hidden cursor-col-resize select-none border border-gray-100"
      onMouseMove={handleMove}
      onTouchMove={(e) => handleMove(e.touches[0])}
    >
      {/* After Image (Background) */}
      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
        alt="After"
      />

      {/* Before Image (Clip-path overlay) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={before}
          className="absolute inset-0 w-full h-full object-cover grayscale-[40%]"
          alt="Before"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white shadow-xl z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <ChevronLeft size={12} className="text-gray-400" />
          <ChevronRight size={12} className="text-gray-400" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white text-[8px] px-2 py-1 uppercase tracking-widest">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-[#C5A059]/80 backdrop-blur-md text-white text-[8px] px-2 py-1 uppercase tracking-widest font-bold">
        After 8 Weeks
      </div>
    </div>
  );
};

const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="min-w-[320px] max-w-[350px] bg-white group"
  >
    <BeforeAfterSlider before={review.before} after={review.after} />

    <div className="p-8 border border-t-0 border-gray-100 bg-[#FAF9F6]">
      <div className="flex text-[#C5A059] gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} fill="#C5A059" stroke="none" />
        ))}
      </div>

      <p className="text-sm italic text-[#1A1A1B] mb-6 font-light leading-relaxed">
        "{review.text}"
      </p>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1B]">
            — {review.name}
          </p>
          <p className="text-[8px] text-gray-400 uppercase tracking-widest">
            {review.location}
          </p>
        </div>
        <div className="bg-green-50 text-green-700 text-[8px] font-bold px-2 py-1 rounded-full border border-green-100 uppercase tracking-tighter">
          Verified Result
        </div>
      </div>
    </div>
  </motion.div>
);

const Reviews = () => {
  return (
    <section className="py-32 bg-white px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[#C5A059] text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block">
              Proven Transformation
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Real People. <br />{" "}
              <span className="italic text-[#C5A059]">Real Transitions.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-light leading-relaxed text-center md:text-right">
            Slide the markers to see the restorative power of Melanix over an
            8-week clinical period.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-12 pb-10 no-scrollbar">
          {reviewsData.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-[#1A1A1B] pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
            See All 1,200+ Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
