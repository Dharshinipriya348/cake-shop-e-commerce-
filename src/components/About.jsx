import Hero from './Hero.jsx';

export default function About() {
  return (
    <>
      <Hero title="About Us 💜" />
      <div className="about-box">
        <h2>Our Story</h2>
        <p>Priya Cake Shop started as a tiny home kitchen dream — mixing rich ice cream with soft cake layers to create desserts that feel like a celebration in every bite.</p>
        <p>Every cake here is handcrafted in small batches using real fruit, fresh cream, and a whole lot of love. Our signature lavender, berry, and choco flavours are made to bring color and joy to your special moments.</p>
        <div className="about-icons"><span>🍦</span><span>🎂</span><span>💜</span></div>
        <h2>Why Choose Us</h2>
        <p>
          🌸 Fresh ingredients, no shortcuts<br />
          🎨 Playful designs in purple, pink & blue<br />
          🚚 Fast delivery, cold and fresh<br />
          💌 Made to order for birthdays & celebrations
        </p>
      </div>
    </>
  );
}
