import RetinaImg from "/components/common/RetinaImg";

export default function StatTile(props) {
  const { title, subhead, imgClass, imgSrc, children } = props;

  return (
    <section className="stat-tile">
      <h3>{title}</h3>
      {subhead && <p className="stat-tile-subhead">{subhead}</p>}

      <RetinaImg className={imgClass} file={imgSrc} extension="jpg" />

      {children}
    </section>
  );
}
