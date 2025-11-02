import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#050807] py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10">
            <Shield className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <p className="font-semibold">Cyber Quest</p>
            <p className="text-xs text-emerald-100/70">Learn. Explore. Defend.</p>
          </div>
        </div>
        <p className="text-xs text-emerald-100/70">
          For education only. All simulations are safe and ethical.
        </p>
      </div>
    </footer>
  );
}
