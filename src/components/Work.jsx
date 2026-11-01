import React, { useCallback, useEffect, useState } from 'react'
import Artwork from './Artwork'
import { artist, works } from '../data'

function Lightbox({ index, onClose, onMove }) {
  const work = works[index]

  const onKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    },
    [onClose, onMove]
  )

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onKey])

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-ink/95" role="dialog" aria-modal="true" aria-label={work.title}>
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-mute">
          {index + 1} / {works.length}
        </p>
        <button onClick={onClose} className="nav-link" aria-label="Close">
          Close ✕
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-20" onClick={onClose}>
        <button
          onClick={(e) => { e.stopPropagation(); onMove(-1) }}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-mute hover:text-bone md:left-6"
          aria-label="Previous"
        >
          ‹
        </button>
        <div onClick={(e) => e.stopPropagation()} className="max-h-full w-full max-w-md overflow-auto md:max-w-lg">
          <Artwork {...work} />
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onMove(1) }}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-mute hover:text-bone md:right-6"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="px-0 py-0 text-center md:px-8">
        <p className="font-display text-xl">{work.title}</p>
        <p className="mt-1 text-sm text-mute">
          {work.medium} · {work.year}
        </p>
      </div>
    </div>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)
  const move = useCallback((d) => setActive((i) => (i === null ? i : (i + d + works.length) % works.length)), [])

  return (
    <main className="w-full px-0 pt-14">
      <section className="mb-14 max-w-2xl animate-fadeUp">
          <h1 className="mt-4 ml-7 font-display text-4xl leading-tight md:text-6xl">{artist.name}</h1>
        {/* INTRO TEXT: edit the sentence after {artist.tagline}. to change the line under the page title. */}
        <p className="mt-4 ml-7 text-mute">{artist.tagline}. </p>
      </section>

      {/* GALLERY: the pieces come from `works` in src/data.js. Add images there, not here. */}
      <div className="columns-1 gap-0 sm:columns-2 lg:columns-4">
        {works.map((w, i) => (
          <button
            key={w.id}
            onClick={() => setActive(i)}
            className="group relative mb-0 block w-full break-inside-avoid overflow-hidden bg-panel text-left"
            aria-label={`View ${w.title} full size`}
          >
            <Artwork {...w} className="transition duration-500 group-hover:scale-[1.03]" />
            <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <span>
                <span className="block font-display text-lg">{w.title}</span>
                <span className="block text-xs text-mute">{w.medium} · {w.year}</span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {active !== null && <Lightbox index={active} onClose={() => setActive(null)} onMove={move} />}
    </main>
  )
}
