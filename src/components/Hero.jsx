import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 py-24 md:py-32 lg:px-12 flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl min-h-[90vh] overflow-hidden">
      {/* Soft pastel ambient background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-primary opacity-10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-secondary opacity-15 blur-[120px] pointer-events-none"></div>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 animate-slide-up opacity-0">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-brand-dark tracking-tight">
          Find your sanctuary in our exclusive collections.
        </h1>
        <p className="text-xl md:text-2xl text-brand-gray font-light mb-10 max-w-lg leading-relaxed">
          Discover a curated selection of extraordinary homes designed to elevate your living experience.
        </p>
        <button className="group flex items-center gap-3 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-[1.04] shadow-md hover:shadow-lg">
          Unlock free website
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Image / Visual */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 relative animate-slide-up opacity-0 stagger-2">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto xl:max-w-lg border border-brand-light-gray">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Luxurious mansion interior with pool" 
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Decorative overlay element */}
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md border border-brand-light-gray p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-64 md:w-72 animate-float">
            <p className="font-serif text-lg font-bold mb-1 text-brand-dark">Exceptional Living</p>
            <p className="text-sm text-brand-gray">Award-winning estates in the world's most desirable locations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
