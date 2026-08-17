import { useState } from 'react';
import Hero from './Hero.jsx';

export default function Checkout({ cart, cakes, total, clearCart, setPage }) {
  const [orderDone, setOrderDone] = useState(false);

  const handlePay = () => {
    if (cart.length === 0) { alert('Your cart is empty!'); return; }
    setOrderDone(true);
    clearCart();
  };

  return (
    <>
      <Hero title="Checkout 💳" />
      <div className="pay-wrap">
        <div className="pay-box">
          {!orderDone ? (
            <>
              <h2>Your Order</h2>
              {cart.length === 0 ? (
                <div className="empty-cart">Your cart is empty 🍦 go add some cakes!</div>
              ) : (
                cart.map((id, i) => {
                  const c = cakes.find((x) => x.id === id);
                  return (
                    <div className="pay-item" key={i}>
                      <span>{c.emoji} {c.name}</span>
                      <span>₹{c.price}</span>
                    </div>
                  );
                })
              )}
              <div className="pay-total"><span>Total</span><span>₹{total}</span></div>
              <input placeholder="Full Name" />
              <input placeholder="Card Number" />
              <input placeholder="Delivery Address" />
              <button className="paybtn" onClick={handlePay}>Pay Now</button>
              <a className="back" onClick={() => setPage('home')}>← Back to shop</a>
            </>
          ) : (
            <div className="success show">
              <div className="success-emoji">🎉</div>
              <h2>Order Placed!</h2>
              <p>Your yummy ice cream cake is on its way 🍰</p>
              <button className="paybtn" onClick={() => setPage('home')}>Back to Shop</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
