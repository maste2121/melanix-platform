import "react";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import AboutUs from "../components/sections/AboutUs";
import Ingredients from "../components/sections/Ingredients";
import Benefits from "../components/sections/Benefits";
import HowToUse from "../components/sections/HowToUse";
import Reviews from "../components/sections/Reviews";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  return (
    <div className="overflow-hidden bg-[#FAF9F6]">
      {/* 1. Hero - The "Hook" (ID: home) */}
      <section id="home">
        <HeroSection />
      </section>

      {/* 2. Features - The "Value" (Optional ID: features) */}
      <section id="features">
        <FeaturesSection />
      </section>

      {/* 3. About Us - The "Story" (ID: about) */}
      <section id="about" className="bg-white">
        <AboutUs />
      </section>

      {/* 4. Ingredients - The "Science" (ID: ingredients) */}
      <section id="ingredients">
        <Ingredients />
      </section>

      {/* 5. Benefits - The "Results" (ID: benefits) */}
      <section id="benefits">
        <Benefits />
      </section>

      {/* 6. How To Use - The "Ritual" (ID: how-to-use) */}
      <section id="how-to-use" className="bg-white">
        <HowToUse />
      </section>

      {/* 7. Reviews - The "Trust" (ID: reviews) */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* 8. Contact - The "Connection" (ID: contact) */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
