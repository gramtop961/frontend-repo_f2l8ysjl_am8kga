import { Mail, Shield, Bug, Code, ChevronRight } from 'lucide-react';

const modules = [
  {
    id: 'phishing',
    title: 'Phishing Detective',
    icon: Mail,
    color: 'from-emerald-400/20 to-emerald-600/10',
    pill: 'Beginner',
    description:
      'Spot fake emails, shady links, and lookalike websites. Practice with safe simulations.',
    tasks: ['Decode a suspicious email', 'Compare real vs. fake bank pages', 'URL safety checklist'],
  },
  {
    id: 'basics',
    title: 'How Computers Work',
    icon: Code,
    color: 'from-cyan-400/20 to-cyan-600/10',
    pill: 'Core Concepts',
    description:
      'CPU, memory, and programs explained simply. See how bits turn into actions.',
    tasks: ['What is RAM vs. storage?', 'How instructions run', 'Binary basics'],
  },
  {
    id: 'memory',
    title: 'Memory & Binary Exploits',
    icon: Bug,
    color: 'from-fuchsia-400/20 to-fuchsia-600/10',
    pill: 'Advanced (Guided)',
    description:
      'Learn safe, ethical theory of overflows and input validation through puzzles.',
    tasks: ['Safe buffer puzzle', 'Input validation game', 'Find the bug mindset'],
  },
  {
    id: 'defense',
    title: 'Build Your Defense',
    icon: Shield,
    color: 'from-amber-400/20 to-amber-600/10',
    pill: 'Projects',
    description:
      'Create a mock login page and a phishing email as a red teamer—then fix them like blue team!',
    tasks: ['Design a fake page (for learning)', 'Write a “phishy” email', 'Turn it into a safe page'],
  },
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="relative w-full bg-[#050807] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Choose your next quest</h2>
            <p className="mt-1 text-emerald-100/70">Short, fun missions with interactive challenges.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b p-4 transition hover:border-emerald-400/40 hover:bg-white/5"
            >
              <div className={`absolute inset-0 -z-0 bg-gradient-to-b ${m.color} opacity-60`} />
              <div className="relative z-10">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <m.icon className="h-5 w-5 text-emerald-300" />
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-200">
                      {m.pill}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-emerald-200 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-emerald-100/80">{m.description}</p>
                <ul className="mt-3 space-y-1 text-xs text-emerald-100/70">
                  {m.tasks.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
