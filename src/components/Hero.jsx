import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients for depth (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90 z-10" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl z-10" />

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
          <Sparkles className="h-4 w-4 text-blue-300" />
          Cognitive Health • AI-Powered
        </span>
        <h1 className="text-balance font-extrabold leading-tight tracking-tight text-white text-4xl sm:text-6xl md:text-7xl">
          NeuroSphere
          <span className="block bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
            Elevate Your Brain. Amplify Your Life.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-white/80 sm:text-xl">
          A next‑gen mental fitness companion that blends neuroscience, AI coaching, and
          flow‑state productivity into one beautiful, effective experience.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            <Rocket className="h-5 w-5" />
            Get Early Access
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
