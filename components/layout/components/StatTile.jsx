export default function StatTile(props) {
  const { title, subhead, children } = props;

  return (
    <section className="stat-tile">
      <h3>{title}</h3>
      {subhead && <p className="stat-tile-subhead">{subhead}</p>}
      {children}
    </section>
  );
}
