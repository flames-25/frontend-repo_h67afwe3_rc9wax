import React from 'react';
import { Brain, Timer, Sparkles, BarChart3, Shield, Waves } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Neuro Workouts',
    desc: 'Scientifically designed micro-sessions to enhance memory, focus, and emotional resilience.'
  },
  {
    icon: Timer,
    title: 'Flow Timers',
    desc: 'Adaptive focus cycles that tune to your energy rhythms for deep work without burnout.'
  },
  {
    icon: BarChart3,
    title: 'Cognitive Biomarkers',
    desc: 'Daily brain-health score powered by passive signals and reflective check-ins.'
  },
  {
    icon: Waves,
    title: 'Breath & Coherence',
    desc: 'Guided breathing and binaural soundscapes to regulate stress and sharpen clarity.'
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    desc: 'Local-first processing with granular controls. Your mind is yours—period.'
  },
  {
    icon: Sparkles,
    title: 'AI Coach',
    desc: 'A supportive companion that learns your patterns and nudges you toward healthier habits.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-5xl">
          Everything your mind needs
          <span className="block bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
            in one beautifully simple app
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Built with neuroscientists and productivity experts to help you feel better and get more done.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden>
                <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Icon className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
