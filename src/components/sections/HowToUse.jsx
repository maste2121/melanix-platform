const HowToUse = () => (
  <section className="py-24 bg-[#EFE7DE] px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-serif italic mb-16">The Daily Ritual</h2>
      <div className="grid md:grid-cols-3 gap-12 relative">
        <Step
          num="01"
          title="Apply"
          desc="Gently massage 5-10 drops into your scalp."
        />
        <Step
          num="02"
          title="Absorb"
          desc="Leave for 4 hours or overnight for best results."
        />
        <Step
          num="03"
          title="Rinse"
          desc="Wash with a natural, mild shampoo."
        />
      </div>
    </div>
  </section>
);

const Step = ({ num, title, desc }) => (
  <div className="relative group">
    <span className="text-7xl font-serif text-[#C5A059]/20 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-[#C5A059]/40 transition-colors">
      {num}
    </span>
    <h4 className="relative z-10 text-xl font-serif mb-4 mt-10">{title}</h4>
    <p className="text-gray-600 text-sm font-light leading-relaxed">{desc}</p>
  </div>
);

export default HowToUse;
