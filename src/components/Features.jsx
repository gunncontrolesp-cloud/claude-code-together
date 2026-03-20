import { Compass, Key, Shield, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Key className="w-8 h-8 text-brand-primary" />,
      title: "Exclusive Access",
      description: "Gain entry to off-market properties and private listings before they reach the public sphere."
    },
    {
      icon: <Compass className="w-8 h-8 text-brand-secondary" />,
      title: "Bespoke Guidance",
      description: "Receive personalized, white-glove advisory tailored specifically to your unique lifestyle aspirations."
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-primary" />,
      title: "Secure Transactions",
      description: "Experience absolute peace of mind with our discreet, legally robust closing procedures."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-secondary" />,
      title: "Elevated Living",
      description: "Move into homes that are architectural masterpieces, meticulously vetted for quality and design."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Distinction</h2>
          <p className="text-brand-gray text-lg">
            We don't just sell houses; we curate environments where your legacy can flourish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-brand-cream border border-brand-light-gray p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-slide-up opacity-0`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-6 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-brand-primary transition-colors">{feature.title}</h3>
              <p className="text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
