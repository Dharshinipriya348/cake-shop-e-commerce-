# Priya Cake Shop 🍦 (React + Vite)

Full React app — Home, Search, About, Checkout, cart, product detail modal,
purple/pink/blue theme, animations, and a dark mode / light mode toggle (🌙/☀️ button in navbar).

## How to run (VS Code)

1. Unzip and open the folder in VS Code.
2. Open terminal (`Ctrl + ~`) and run:
   ```
   npm install
   npm run dev
   ```
3. Click the `http://localhost:5173` link shown in the terminal — site opens in your browser.

## Folder structure
```
priya-cake-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx          (page state, theme state, cart state)
│   ├── App.css           (all styling, light + dark mode)
│   ├── index.css
│   ├── data.js            (cake product list)
│   └── components/
│       ├── Navbar.jsx     (nav + dark/light toggle)
│       ├── Hero.jsx
│       ├── ProductGrid.jsx
│       ├── Modal.jsx      (animated product detail popup)
│       ├── About.jsx
│       └── Checkout.jsx   (cart + payment page)
```

Click 🌙 / ☀️ in the top right of the navbar to switch dark/light mode.
