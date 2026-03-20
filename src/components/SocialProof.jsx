import { Building2, Home, Hotel, MountainSnow, TentTree, Trees } from "lucide-react";

export default function SocialProof() {
  const logos = [
    { icon: <Building2 className="w-6 h-6" />, name: "Sotheby's" },
    { icon: <Home className="w-6 h-6" />, name: "Christie's" },
    { icon: <Hotel className="w-6 h-6" />, name: "Douglas Elliman" },
    { icon: <Trees className="w-6 h-6" />, name: "Coldwell Banker" },
    { icon: <MountainSnow className="w-6 h-6" />, name: "Knight Frank" },
  ];

  return (
    <section className="py-16 border-y border-brand-light-gray bg-white/50 animate-fade-in opacity-0 stagger-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <p className="text-sm uppercase tracking-widest text-brand-gray font-semibold shrink-0">
          Trusted by the best
        </p>
        <div className="flex flex-wrap items-center justify-between w-full gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 hover:text-brand-primary hover:-translate-y-1 transition-all duration-300">
              {logo.icon}
              <span className="font-serif text-xl tracking-wide">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
