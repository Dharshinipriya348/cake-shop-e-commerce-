export default function Hero({ title, sub }) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      {sub && <p>{sub}</p>}
    </div>
  );
}
