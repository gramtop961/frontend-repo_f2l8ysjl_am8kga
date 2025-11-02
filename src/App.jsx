import Hero from './components/Hero.jsx';
import ModulesGrid from './components/ModulesGrid.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#050807] text-white">
      <Hero />
      <ModulesGrid />
      <HowItWorks />
      <Footer />
    </div>
  );
}
