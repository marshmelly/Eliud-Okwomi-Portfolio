import React, { useState } from 'react'
import { artist } from '../data'

const links = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/rates', label: 'Rates' },
]

export default function Header({ route, cartCount, onCart }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#/" className="font-display text-xl tracking-tight md:text-2xl" onClick={() => setOpen(false)}>
          {artist.name}
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.to} href={`#${l.to}`} className="nav-link" aria-current={route === l.to ? 'page' : undefined}>
              {l.label}
            </a>
          ))}
          
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="grid h-9 w-9 place-items-center">
            <span className="relative block h-3 w-6">
              <span className={`absolute left-0 h-px w-full bg-bone transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-3 h-px w-full bg-bone transition ${open ? 'top-1.5 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-5 py-6 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.to}>
                <a href={`#${l.to}`} className="nav-link text-base" aria-current={route === l.to ? 'page' : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
