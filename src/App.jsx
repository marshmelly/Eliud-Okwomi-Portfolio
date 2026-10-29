import React, { useEffect, useState, useCallback } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Work from './components/Work'
import About from './components/About'
import Rates from './components/Rates'
import CartDrawer from './components/CartDrawer'

const getRoute = () => window.location.hash.replace(/^#/, '') || '/'

export default function App() {
  const [route, setRoute] = useState(getRoute())
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const add = useCallback((p) => {
    setCart((c) => {
      const found = c.find((i) => i.id === p.id)
      return found ? c.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)) : [...c, { id: p.id, title: p.title, price: p.price, qty: 1 }]
    })
    setCartOpen(true)
  }, [])

  const changeQty = useCallback(
    (id, d) => setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: i.qty + d } : i)).filter((i) => i.qty > 0)),
    []
  )
  const remove = useCallback((id) => setCart((c) => c.filter((i) => i.id !== id)), [])

  const count = cart.reduce((s, i) => s + i.qty, 0)
  const page = route === '/about' ? <About />  : route === '/rates' ? <Rates /> : <Work />

  return (
    <>
      <Header route={route} cartCount={count} onCart={() => setCartOpen(true)} />
      {page}
      <Footer />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onQty={changeQty} onRemove={remove} />
    </>
  )
}
