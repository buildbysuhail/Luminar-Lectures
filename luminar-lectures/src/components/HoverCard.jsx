import "./HoverCard.css";

export default function HoverCard({
  key,
  title,
  description,
  label = "View lecture",
  onClick,
}) {
  const hasTitle = Boolean(title && title.trim());
  const displayTitle = hasTitle ? title : "No title given";
  const titleClass = `hc-title ${hasTitle ? "" : "hc-title--missing"}`;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <article
      className="hc"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {/* Layer 1: shown when idle */}
      <div className="hc-idle">
        <h3 className={titleClass}>{displayTitle}</h3>
      </div>

      {/* Layer 2: shown on hover / focus */}
      <div className="hc-hover">
        <span className="hc-label">{label} →</span>

        <div className="hc-center">
          <h3 className={titleClass}>{displayTitle}</h3>
          {description && <p className="hc-desc">{description}</p>}
        </div>
      </div>
    </article>
  );
}