import RetinaImg from "/components/common/RetinaImg";

export default function MerchTile(props) {
  const { label, subhead, link, imgSrc } = props;

  return (
    <li className="merch-tile">
      <a className="merch-cover-link" href={link} target="_blank">
        <span className="u-visually-hidden">
          View at thewelcoming.square.site
        </span>
      </a>
      <RetinaImg
        className="merch-img"
        file={`merch/${imgSrc}`}
        loading="lazy"
        extension="jpg"
        alt=""
      />
      <span className="merch-tile-text u-text-c">
        <h3 className="merch-label u-title u-font-sm u-mb-0">
          {label}
          {subhead && (
            <span className="merch-subhead u-subhead u-font-xs">
              <br />({subhead})
            </span>
          )}
        </h3>
      </span>
    </li>
  );
}
