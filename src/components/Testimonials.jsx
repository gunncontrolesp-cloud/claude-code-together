import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The team understood our dual need for privacy and architectural pedigree. Our new coastal estate isn't just a home—it's a masterpiece that reflects everything we've worked for.",
      name: "Eleanor Vance",
      title: "Private Collector & Philanthropist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "Discreet, fiercely competent, and possessing an unparalleled portfolio of off-market properties. They orchestrated the acquisition of our penthouse seamlessly.",
      name: "Julian & Clara Rossi",
      title: "Founders, Apex Ventures",
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-light-gray relative px-6 lg:px-12 border-y border-[#e2dec9]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
        <div className="md:w-1/3 animate-slide-up">
          <p className="font-serif italic text-brand-primary text-2xl mb-4">"The standard of living."</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">Hear from our clients</h2>
          <p className="text-brand-gray">
            Our relationships endure long after the final signature. We measure success by the quiet satisfaction of those who expect only the absolute best.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm p-10 shadow-lg border border-white rounded-2xl relative hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 animate-slide-up opacity-0"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-primary opacity-20" />
              <p className="text-lg text-brand-dark mb-8 relative z-10 leading-relaxed font-light">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-light-gray"
                />
                <div>
                  <h4 className="font-bold font-serif text-brand-dark">{test.name}</h4>
                  <p className="text-sm text-brand-gray tracking-wide">{test.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
