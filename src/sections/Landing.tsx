import About from "./About";
import Hero from "./Hero";

export default function HeroSection() {
  return (
    <div className="bg-white w-full h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Portfolio section */}
      <About />

      {/* Contact section */}
      <About />
    </div>
  );
}
