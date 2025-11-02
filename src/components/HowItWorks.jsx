import { Gamepad2, BookOpen, Target, Trophy } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Gamepad2,
      title: 'Play Quests',
      desc: 'Each quest is a short story mission with clues, choices, and safe sandboxes to try ideas.',
    },
    {
      icon: BookOpen,
      title: 'Learn by Doing',
      desc: 'Concepts like memory, binary, and phishing are explained with visuals and mini-games.',
    },
    {
      icon: Target,
      title: 'Build & Break (Safely)',
      desc: 'Create mock phishing emails and pages to understand tricks — then practice defending against them.',
    },
    {
      icon: Trophy,
      title: 'Earn Badges',
      desc: 'Level up your Cyber Rank, unlock harder missions, and collect certificates.',
    },
  ];

  return (
    <section id="how" className="w-full bg-[#0A0F0D] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">How it works</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-emerald-100/70">
          Designed for ages 10+ with parent/teacher guidance. Ethics and safety are built in.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-emerald-300" />
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-emerald-100/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
