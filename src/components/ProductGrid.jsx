export default function ProductGrid({ list, onOpen, onAdd }) {
  if (!list.length) {
    return <div className="no-results">No cakes found 🍰 try another search</div>;
  }
  return (
    <div className="grid">
      {list.map((c, i) => (
        <div
          className="card"
          key={c.id}
          style={{ animationDelay: `${i * 0.05}s` }}
          onClick={() => onOpen(c)}
        >
          <div className="cake-img">{c.emoji}</div>
          <h3>{c.name}</h3>
          <div className="price">₹{c.price}</div>
          <button onClick={(e) => { e.stopPropagation(); onAdd(c.id); }}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
