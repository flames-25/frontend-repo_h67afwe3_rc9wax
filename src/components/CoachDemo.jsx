import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function CoachDemo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hey, I’m your NeuroSphere coach. What would you like to focus on today?' }
  ]);
  const [input, setInput] = useState('');

  const onSend = () => {
    const text = input.trim();
    if (!text) return;
    const next = [...messages, { role: 'user', text }];
    // Simple demo response for now
    const reply = {
      role: 'bot',
      text: 'Great choice. Let’s set a 25‑minute focus sprint. I’ll check in at half-time with a breathing cue.'
    };
    setMessages([...next, reply]);
    setInput('');
  };

  return (
    <section className="w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Try the AI Coach</h2>
            <p className="mt-2 text-white/70">A gentle nudge engine for better habits and deep work.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="h-64 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`mb-3 flex items-start gap-2 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'bot' && (
                  <div className="rounded-lg bg-white/10 p-2">
                    <Bot className="h-4 w-4 text-sky-300" />
                  </div>
                )}
                <div className={`max-w-[75%] rounded-xl px-3 py-2 text-sm ${m.role === 'user' ? 'bg-sky-500/20 border border-sky-400/30' : 'bg-white/10 border border-white/10'}`}>
                  {m.text}
                </div>
                {m.role === 'user' && (
                  <div className="rounded-lg bg-white/10 p-2">
                    <User className="h-4 w-4 text-fuchsia-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSend()}
              placeholder="Ask for a focus plan, mood support, or a quick breath routine..."
              className="flex-1 rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            />
            <button
              onClick={onSend}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-sky-500/20 transition hover:brightness-105"
            >
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
