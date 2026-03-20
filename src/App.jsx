import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <main className="w-full bg-brand-cream overflow-x-hidden">
      {/* 
        Header could go here if we wanted a sticky navbar, 
        but since it's a single page landing site with no routing, 
        we'll keep it clean with just the logo and maybe a top right button if needed. 
        For now, the Hero acts as the top of the page.
      */}
      <nav className="absolute top-0 w-full z-50 px-6 lg:px-12 py-8 flex justify-between items-center animate-fade-in">
        <div className="font-serif text-2xl font-bold tracking-widest uppercase text-brand-dark">Aura Estate</div>
      </nav>

      <Hero />
      <SocialProof />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
