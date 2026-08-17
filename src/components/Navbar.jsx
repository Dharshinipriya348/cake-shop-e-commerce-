export default function Navbar({ page, setPage, cartCount, theme, toggleTheme }) {
  return (
    <nav>
      <span className="logo" onClick={() => setPage('home')}>🍦 Priya Cake Shop</span>
      <ul>
        <li><a className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Home</a></li>
        <li><a className={page === 'search' ? 'active' : ''} onClick={() => setPage('search')}>Search</a></li>
        <li><a className={page === 'about' ? 'active' : ''} onClick={() => setPage('about')}>About</a></li>
        <li>
          <a className="cart-link" onClick={() => setPage('checkout')}>
            🛒 Cart <span className="cart-count">{cartCount}</span>
          </a>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark / light mode">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
