import React, { useEffect } from 'react'

export default function CartDrawer({ open, items, onClose, onQty, onRemove }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-line bg-panel transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-2xl">Your cart</h2>
          <button onClick={onClose} className="nav-link" aria-label="Close cart">Close ✕</button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-mute">Your cart is empty.</p>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((i) => (
                <li key={i.id} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="text-sm font-medium">{i.title}</p>
                    <p className="text-xs text-mute">${i.price}</p>
                    <button onClick={() => onRemove(i.id)} className="mt-1 text-xs text-mute underline underline-offset-4 hover:text-bone">
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center border border-line">
                    <button onClick={() => onQty(i.id, -1)} className="h-8 w-8 hover:bg-line" aria-label={`Decrease ${i.title}`}>−</button>
                    <span className="w-8 text-center text-sm">{i.qty}</span>
                    <button onClick={() => onQty(i.id, 1)} className="h-8 w-8 hover:bg-line" aria-label={`Increase ${i.title}`}>+</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-line px-6 py-5">
          <div className="mb-4 flex justify-between text-sm">
            <span className="text-mute">Subtotal</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={() => alert('Connect your payment provider (Stripe, Paystack, M-Pesa…) here.')}
            className="btn w-full disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-bone"
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
