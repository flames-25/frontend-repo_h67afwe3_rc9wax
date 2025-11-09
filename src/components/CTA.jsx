import React from 'react';
import { Apple, Android, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative w-full bg-gradient-to-b from-zinc-950 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-sky-500/10 to-fuchsia-500/20 p-1">
          <div className="rounded-3xl bg-black/60 p-8 sm:p-12">
            <h3 className="text-3xl font-bold sm:text-4xl">
              Be first to experience NeuroSphere
            </h3>
            <p className="mt-2 max-w-2xl text-white/70">
              Join the private beta. Get personalized brain-health insights and a daily ritual that actually sticks.
            </p>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                className="flex-1 rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                <Mail className="h-5 w-5" />
                Request Invite
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-white/60">
              <span className="text-xs">Coming soon:</span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs">
                <Apple className="h-4 w-4" /> iOS
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs">
                <Android className="h-4 w-4" /> Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
