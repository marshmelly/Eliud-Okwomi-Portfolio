import React, { useState } from 'react'
import Artwork from './Artwork'
import { artist } from '../data'
import logo from "./Assets/favicon1.png"

export default function About() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Enquiry from ${f.get('name')}`)
    const body = encodeURIComponent(`${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`)
    window.location.href = `mailto:${artist.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const field =
    'w-full border border-line bg-panel px-4 py-3 text-sm text-bone placeholder:text-mute focus:border-ember focus:outline-none'

  return (
    <main className="mx-auto max-w-7xl px-5 pt-14 md:px-8">
      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          {/* PORTRAIT: put a photo in public/ (e.g. public/eliud.jpg), then add
              src="/eliud.jpg" to the Artwork below and delete the small note under it. */}
          <Artwork seed={21} ratio={1.3} title="Portrait placeholder" className="overflow-hidden bg-panel" src={logo}/>
          
        </div>

        <div className="animate-fadeUp md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-ember">About</p>
          {/* HEADLINE: change "Hello, I’m" below to edit the greeting. The first name comes from data.js. */}
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Hello, I’m {artist.name.split(' ')[0]}.</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-bone/85">
            {artist.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {artist.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="nav-link underline-offset-8 hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <form onSubmit={submit} className="mt-14 space-y-4 border-t border-line pt-10">
            <h2 className="font-display text-2xl">Commissions & enquiries</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className={field} aria-label="Your name" />
              <input name="email" type="email" required placeholder="Email address" className={field} aria-label="Email address" />
            </div>
            <textarea name="message" required rows={5} placeholder="Tell me about your project" className={field} aria-label="Message" />
            <button type="submit" className="btn">Send message</button>
            {sent && <p className="text-sm text-mute">Opening your email app…</p>}
          </form>
        </div>
      </div>
    </main>
  )
}
