import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CoachDemo from './components/CoachDemo';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <FeatureGrid />
      <CoachDemo />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} NeuroSphere. Designed for wellbeing and focus.</p>
      </footer>
    </div>
  );
}

export default App;
