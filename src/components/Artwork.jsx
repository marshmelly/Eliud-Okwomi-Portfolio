import React from 'react'

// Small seeded PRNG so every placeholder is stable between renders.
function rng(seed) {
  let s = seed * 9301 + 49297
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const palettes = [
  ['#d9743a', '#2b1b14', '#f2c48d'],
  ['#3c6e71', '#14232a', '#e8d9b5'],
  ['#8e3b46', '#1c1117', '#f0b67f'],
  ['#5b7c4a', '#141d14', '#efe3b4'],
  ['#4a5d9c', '#12152a', '#f4c7a1'],
  ['#c2a14a', '#1f1a0e', '#f5ebd0'],
]

function Placeholder({ seed, ratio, title }) {
  const r = rng(seed)
  const [a, bg, c] = palettes[seed % palettes.length]
  const W = 400
  const H = Math.round(W * ratio)
  const shapes = Array.from({ length: 6 }, (_, i) => {
    const kind = Math.floor(r() * 3)
    const x = r() * W
    const y = r() * H
    const s = 60 + r() * 180
    const fill = i % 2 ? a : c
    const opacity = 0.25 + r() * 0.5
    if (kind === 0) return <circle key={i} cx={x} cy={y} r={s / 2} fill={fill} opacity={opacity} />
    if (kind === 1)
      return <rect key={i} x={x - s / 2} y={y - s / 2} width={s} height={s * (0.4 + r())} rx={r() * 30} fill={fill} opacity={opacity} transform={`rotate(${r() * 60 - 30} ${x} ${y})`} />
    return <path key={i} d={`M${x - s} ${y + s / 2} Q${x} ${y - s} ${x + s} ${y + s / 2} Z`} fill={fill} opacity={opacity} />
  })
  const gid = `g${seed}`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={`${title} (placeholder artwork)`}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={bg} />
          <stop offset="1" stopColor={a} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${gid})`} />
      {shapes}
    </svg>
  )
}

export default function Artwork({ src, title, seed, ratio, className = '' }) {
  return (
    <div className={className}>
      {src ? (
        <img src={src} alt={title} loading="lazy" className="block h-auto w-full" />
      ) : (
        <Placeholder seed={seed} ratio={ratio} title={title} />
      )}
    </div>
  )
}
