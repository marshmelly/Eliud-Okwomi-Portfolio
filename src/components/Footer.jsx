import React from 'react'
import { artist } from '../data'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl">{artist.name}</p>
          <p className="mt-1 text-sm text-mute">{artist.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {artist.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="nav-link">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-mute">© {new Date().getFullYear()} {artist.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
