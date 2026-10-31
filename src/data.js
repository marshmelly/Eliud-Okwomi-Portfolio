import Image01 from './Public/artworks/jonte2.jpg'
import Image02 from './Public/artworks/jonte.jpg'
import Image03 from './Public/artworks/acher.jpg'
import Image04 from './Public/artworks/001.jpg'
import Image05 from './Public/artworks/8weeks.jpg'
import Image06 from './Public/artworks/apollo character concept.jpg'
import Image07 from './Public/artworks/cover5_baba.jpg'
import Image08 from './Public/artworks/bazoo mascot 3.png'
import Image09 from './Public/artworks/bazoo mascot 4.png'
import Image10 from './Public/artworks/content.jpg'
import Image11 from './Public/artworks/DJB pg1.jpg'
import Image12 from './Public/artworks/k-bian taicoon.jpg'
import Image13 from './Public/artworks/bazoo uji blend mockup front.jpg'
import Image15 from './Public/artworks/odi dancer.jpg'
import Image16 from './Public/artworks/BG1.jpg'
import Image17 from './Public/artworks/004.jpg'
import Image18 from './Public/artworks/cover1.jpg'
import Image19 from './Public/artworks/learners visit farmer_2.jpg'
import Image20 from './Public/artworks/bearattack.jpg'
import Image21 from './Public/artworks/panel 4.jpg'
import Image23 from './Public/artworks/MK pg1.jpg'
import Image24 from './Public/artworks/panel 2.jpg'
import Image25 from './Public/artworks/pg1.jpg'
import Image26 from './Public/artworks/pg4.jpg'
import Image27 from './Public/artworks/pg5.jpg'
import Image28 from './Public/artworks/self love.jpg'
import Image38 from './Public/artworks/pg 03.jpg'
import Image31 from './Public/artworks/pg60.jpg'
import Image32 from './Public/artworks/pg62.jpg'
import Image33 from './Public/artworks/umash toon ad 2.jpg'
import Image34 from './Public/artworks/Voke_logo2.jpg'
import Image35 from './Public/artworks/rec.jpg'
import Image36 from './Public/artworks/JL07.jpg'
import Image37 from './Public/artworks/BG1.jpg'
import Image40 from './Public/artworks/MK2.jpg'
import Image41 from './Public/artworks/manlike_1.jpg'
import Image42 from './Public/artworks/MK webtoon pg1.png'
import Image44 from './Public/artworks/cover2.jpg'
import Image45 from './Public/artworks/tirhakah.jpg'
import Image46 from './Public/artworks/Malkia_pg5.jpg'
import Image43 from './Public/artworks/cover3.jpg'
import Image48 from './Public/artworks/pg_4.jpg'
import Image49 from './Public/artworks/boyie.jpg'
import Image50 from './Public/artworks/pg36.jpg'
import Image51 from './Public/artworks/pg50.jpg'
import Image52 from './Public/artworks/pg56.jpg'
import Image53 from './Public/artworks/cover Illustration.jpg'
import Image30 from './Public/artworks/sisters_fighting.jpg'
import Image54 from './Public/artworks/MK3.jpg'
import Image55 from './Public/artworks/MK4.jpg'
import Image56 from './Public/artworks/pg04.png'


/* =====================================================================
   EDIT YOUR CONTENT HERE
   Almost everything you'll want to change on the site lives in this file:
   name, tagline, email, bio, social links, portfolio pieces, shop products.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. ARTIST DETAILS  (shown in the header, footer, About page)
   --------------------------------------------------------------------- */
export const artist = {
  name: 'Eliud Okwomi', // shown in the header, footer and page title
  tagline: 'Illustrator & Animator', // short line under the name
  email: 'eokwomi@gmail.com', // the commissions form sends here

  // Social links: change the href to the real profile URLs.
  // Delete a line to remove a link, or copy a line to add one.
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'X', href: 'https://x.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
   
  ],

  // About page text: each string is one paragraph. Add or remove paragraphs freely.
  bio: [
    'I am a conscientious Artist with diverse skills in Digital Art. I have 10+ years of experience in 2D/3D Art. My specialities are illustration Art, 3D Modeling, 3D Texturing, 3D Character Rigging and 2D/3D animation.',
    'Alongside personal work, I take on commissions and collaborations. If you have a project in mind, get in touch — the best work starts with a conversation.',
  ],
}

/* ---------------------------------------------------------------------
   2. PORTFOLIO (Work page)
   Each entry in `works` is one piece in the gallery.

   TO USE REAL ARTWORK:
     a) Put your image files in the  public/art/  folder (create it).
     b) Set `src` to the path, e.g.  src: '/art/golden-hour.jpg'
     c) Update title / year / medium to match.
   While `src` is '' the site shows a generated placeholder instead.

   The `ratio` and `seed` fields only affect placeholders; once you add a
   real image they're ignored and the image keeps its own proportions.
   --------------------------------------------------------------------- */
const titles = [
  'Golden Hour', 'Quiet Signal', 'Market Day', 'Night Bloom', 'Tidewater',
  'Ember', 'Understory', 'Paper Sun', 'Low Light', 'Crossing',
  'Harvest Moon', 'Static', 'Long Shadow', 'Salt & Clay', 'Afterglow',
  'Drift', 'Threshold', 'Mirage', 'Rooftops', 'First Rain',
  'Wildfire', 'Lantern', 'Overgrown', 'Echo',
]

const ratios = [1.25, 0.8, 1, 1.4, 0.9, 1.15, 1.3, 0.85]

// Quick way: this builds placeholder entries from the titles above.
// When you're ready for real work, you can replace this whole block with a
// hand-written list, for example:
//
//   export const works = [
//     { id: 1, title: 'Golden Hour', year: 2024, medium: 'Digital', src: '/art/golden-hour.jpg' },
//     { id: 2, title: 'Market Day',  year: 2023, medium: 'Ink & colour', src: '/art/market-day.jpg' },
//   ]
export const works = [
  {id: 1, src: Image01},
  {id: 2, src: Image02},
  {id: 3, src: Image03},
  {id: 4, src: Image04},
  {id: 5, src: Image05},
  {id: 6, src: Image06},
  {id: 7, src: Image07},
  {id: 8, src: Image08},
  {id: 9, src: Image09},
  {id: 10, src: Image10},
  {id: 11, src: Image11},
  {id: 12, src: Image12},
  {id: 13, src: Image13},
  {id: 14, src: Image45},
  {id: 15, src: Image15},
  {id: 16, src: Image16},
  {id: 49, src: Image49},
  {id: 17, src: Image17},
  {id: 18, src: Image18},
  {id: 19, src: Image19},
  {id: 20, src: Image20},
  {id: 21, src: Image21},
  {id: 23, src: Image23},
  {id: 24, src: Image24},
  {id: 25, src: Image25},
  {id: 26, src: Image26},
  {id: 27, src: Image27},
  {id: 28, src: Image28},
  {id: 29, src: Image31},
  {id: 30, src: Image32},
  {id: 31, src: Image33},
  {id: 32, src: Image34},
  {id: 33, src: Image35},
  {id: 34, src: Image36},
  {id: 35, src: Image37},
  {id: 36, src: Image38},
  {id: 37, src: Image30},
  {id: 38, src: Image42},
  {id: 39, src: Image40},
  {id: 40, src: Image41},
  {id: 41, src: Image43},
  {id: 42, src: Image44},
  {id: 43, src: Image45},
  {id: 44, src: Image46},
  {id: 45, src: Image48},
  {id: 46, src: Image50},
  {id: 47, src: Image51},
  {id: 48, src: Image52},
  {id: 49, src: Image53},
  {id: 50, src: Image54},
  {id: 51, src: Image55},
  {id: 52, src: Image56},
    
]

export const rates = [
  {
    group: 'Illustration',
    blurb: 'Original digital artwork, drawn from scratch to your brief.',
    items: [
      { name: 'Uncoloured/ Outlines', price: '$15 per piece' },
      { name: 'Flat Colours', price: '$20 per piece' },
      { name: 'Shaded Colours', price: '$25 per piece' },
      { name: 'Comic Book Page', price: '$123 per piece' },
      { name: 'Comic Book Cover Art', price: '$154 per piece' },
      { name: 'Concept Art', price: '$50 per piece' },
      { name: 'Medical Illustration(Greyscale)', price: '$150 per piece' },
      { name: 'Medical Illustration(Coloured)', price: '$300 per piece' },
      { name: 'Medical Illustration(3D Render)', price: '$800 per piece' },
      
    ],
  },
  {
    group: 'Animation',
    featured: true,
    blurb: 'Larger or custom pieces. Pricing depends on size, medium and detail.',
    items: [
      { name: 'White board', price: 'From $2500 per minute' },
      { name: '2D', price: 'From $3000 per minute' },
      { name: '3D',  price: '$4500 per minute' },
      { name: 'Storyboards / animatics',  price: '$500 per minute' },
    ],
  },
  {
    group: 'Graphic Design',
    blurb: 'Optional add-ons for any project.',
    items: [
      { name: 'Logo Design', price: '+50%' },
      { name: 'Poster / Flyer A5', price: '$100' },
      { name: 'Banner', price: '$150' },
      { name: 'Billboard', price: '$250' },
      { name: 'Company Profile', price: '$15' },
      { name: 'Package Design', price: '$450' },
      { name: 'Vehicle Branding, Saloon Car', price: '$250' },
      { name: 'Vehicle Branding, Van', price: '$300' },
      { name: 'Vehicle Branding, bus / lorry', price: '$350' },
      { name: 'Event Design', price: '$3500' },
      
    ],
  },
]

export const rateNotes = [
  'A 50% deposit secures your slot; the balance is due before final files are delivered.',
  'Every project includes two rounds of revisions.',
  'Typical turnaround is 1–3 weeks depending on size. Rush work is available on request.',
  'Prices are in USD and exclude any shipping for physical pieces.',
  'Personal-use licence is included. Commercial use is an add-on (see Extras).',
]