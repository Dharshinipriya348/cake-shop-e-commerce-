import { useState } from 'react';
import cakes from './data.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Modal from './components/Modal.jsx';
import About from './components/About.jsx';
import Checkout from './components/Checkout.jsx';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('light');

  const addToCart = (id) => setCart((c) => [...c, id]);
  const clearCart = () => setCart([]);
  const total = cart.reduce((sum, id) => sum + cakes.find((c) => c.id === id).price, 0);
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const filtered = cakes.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app" data-theme={theme}>
      <Navbar
        page={page}
        setPage={setPage}
        cartCount={cart.length}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {page === 'home' && (
        <>
          <Hero title="Priya Cake Shop 🎂" sub="Handcrafted ice cream cakes, made with love in every scoop" />
          <ProductGrid list={cakes} onOpen={setSelected} onAdd={addToCart} />
        </>
      )}

      {page === 'search' && (
        <>
          <Hero title="Find Your Cake 🔍" sub="Search by name or flavour" />
          <div className="search-bar">
            <input
              placeholder="Try 'lavender', 'berry', 'choco'..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <ProductGrid list={filtered} onOpen={setSelected} onAdd={addToCart} />
        </>
      )}

      {page === 'about' && <About />}

      {page === 'checkout' && (
        <Checkout cart={cart} cakes={cakes} total={total} clearCart={clearCart} setPage={setPage} />
      )}

      <footer>Made with 💜 by Priya Cake Shop</footer>

      <Modal cake={selected} onClose={() => setSelected(null)} onAdd={addToCart} />
    </div>
  );
}
