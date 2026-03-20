import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-8 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-br from-brand-secondary to-[#A3B5AC] p-12 lg:p-16 rounded-[2rem] text-center mb-24 shadow-2xl animate-slide-up transition-transform duration-700 mx-auto max-w-5xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold mb-6 relative z-10">Ready to curate your legacy?</h2>
          <p className="text-brand-dark/80 mb-10 text-lg max-w-xl mx-auto font-medium relative z-10">
            Speak with an advisor today and unlock access to our private portfolio of extraordinary residences.
          </p>
          <button className="relative z-10 group flex items-center justify-center gap-3 bg-brand-dark hover:bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold transition-all duration-300 mx-auto shadow-lg hover:shadow-xl hover:scale-105">
            Unlock free website
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold tracking-wider mb-6">Aura Estate</h3>
            <p className="text-brand-light-gray/60 mb-6 font-light leading-relaxed max-w-xs">
              Defining modern luxury real estate by elevating expectations and operating with absolute discretion.
            </p>
            <div className="flex items-center gap-4 text-brand-primary">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-secondary transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-secondary transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-secondary transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-primary">Portfolio</h4>
            <ul className="space-y-4 text-brand-light-gray/70 font-light">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Penthouse Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Coastal Retreats</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Historic Estates</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Off-Market Exclusives</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-primary">Company</h4>
            <ul className="space-y-4 text-brand-light-gray/70 font-light">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Advisory Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Journal & Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-primary">Contact</h4>
            <ul className="space-y-4 text-brand-light-gray/70 font-light">
              <li><a href="mailto:inquiries@auraestate.com" className="hover:text-white transition-colors duration-300">inquiries@auraestate.com</a></li>
              <li><a href="tel:+18005550199" className="hover:text-white transition-colors duration-300">+1 (800) 555-0199</a></li>
              <li className="pt-2">424 Madison Ave, Suite 3400<br/>New York, NY 10017</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-brand-light-gray/40 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Aura Estate LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      {/* Decorative large logo background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <h1 className="font-serif text-[30vw] whitespace-nowrap">AURA</h1>
      </div>
    </footer>
  );
}
