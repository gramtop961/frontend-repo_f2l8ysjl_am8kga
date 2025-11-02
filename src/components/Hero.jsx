import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0A0F0D] text-white">
      {/* Soft gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/30 px-3 py-1 text-xs text-emerald-300 backdrop-blur">
          <Shield className="h-4 w-4" />
          Cybersecurity Adventure for ages 10+
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-emerald-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Learn to Outsmart Scams and Think Like a Hacker
        </h1>
        <p className="mt-4 max-w-2xl text-emerald-100/85 md:text-lg">
          Story-driven quests teach everything from spotting phishing emails to the basics of how computers work — memory, binaries, and real-world exploit thinking — safely and responsibly.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#modules"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-black transition hover:bg-emerald-400"
          >
            <Rocket className="h-5 w-5" /> Start your first quest
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Trophy className="h-5 w-5" /> How it works
          </a>
        </div>
      </div>
    </section>
  );
}
