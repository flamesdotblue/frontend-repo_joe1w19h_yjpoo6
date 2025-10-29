import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
  { href: '#terms', label: 'Terms' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-white/20 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="tracking-tight">Code Aspect</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-200">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md border border-neutral-200 dark:border-neutral-700"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
