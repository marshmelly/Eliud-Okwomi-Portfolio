import React from 'react'
import { rates, rateNotes } from '../data'

// EDIT RATES in src/data.js (`rates` and `rateNotes`). This file only controls layout and headings.
export default function Rates() {
  return (
    <main className="mx-auto max-w-5xl px-5 pt-14 md:px-8">
      <section className="mb-14 max-w-2xl animate-fadeUp">
        <p className="text-xs uppercase tracking-[0.3em] text-ember">Rate card</p>
        <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Rates & Commissions</h1>
        <p className="mt-4 text-mute">
          Clear pricing for new projects. Not sure which option fits? Send a message and I’ll put together a quote.
        </p>
      </section>

      <div className="space-y-12">
        {rates.map((g) => (
          <section
            key={g.group}
            className={`border p-6 md:p-8 ${g.featured ? 'border-ember' : 'border-line'} bg-panel`}
            aria-labelledby={`rate-${g.group}`}
          >
            <div className="mb-6 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h2 id={`rate-${g.group}`} className="font-display text-2xl md:text-3xl">
                {g.group}
              </h2>
              <p className="text-sm text-mute md:max-w-sm md:text-right">{g.blurb}</p>
            </div>

            <ul className="divide-y divide-line">
              {g.items.map((it) => (
                <li key={it.name} className="flex items-start justify-between gap-6 py-4">
                  <div>
                    <p className="font-medium">{it.name}</p>
                    <p className="mt-1 text-sm text-mute">{it.detail}</p>
                  </div>
                  <p className={`shrink-0 font-display text-xl ${g.featured ? 'text-ember' : ''}`}>{it.price}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">Good to know</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-bone/85">
            {rateNotes.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 md:items-end md:text-right">
          <h2 className="font-display text-2xl">Ready to start?</h2>
          <p className="text-sm text-mute md:max-w-xs">Tell me about your project and I’ll reply with a quote and timeline.</p>
          <a href="#/about" className="btn">Request a quote</a>
        </div>
      </section>
    </main>
  )
}