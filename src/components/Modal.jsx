export default function Modal({ cake, onClose, onAdd }) {
  if (!cake) return null;
  return (
    <div className="overlay show" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="cake-img">{cake.emoji}</div>
        <h2>{cake.name}</h2>
        <p>{cake.desc}</p>
        <div className="price">₹{cake.price}</div>
        <div className="row">
          <button className="addbtn" onClick={() => { onAdd(cake.id); onClose(); }}>Add to Cart</button>
          <button className="closebtn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
