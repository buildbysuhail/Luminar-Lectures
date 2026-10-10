import "../Card.css";

export default function Card({
  image,
  tag,
  title,
  description,
  buttonText = "Learn more",
  onClick,
}) {
  return (
    <article className="card">
      <div className={`card-media ${image ? "" : "card-media--fallback"}`}>
        {image && <img src={image} alt={title} className="card-img" />}
        {tag && <span className="card-tag">{tag}</span>}
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-desc">{description}</p>}

        <button className="card-btn" onClick={onClick}>
          {buttonText}
          <span className="card-btn-arrow">→</span>
        </button>
      </div>
    </article>
  );
}