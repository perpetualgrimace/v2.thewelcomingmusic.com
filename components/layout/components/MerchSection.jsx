import Merch from "/data/merch.json";

import MerchTile from "/components/layout/components/MerchTile";

export default function MerchSection() {
  return (
    <section className="merch-section u-text-c">
      <h2 className="u-title u-mb-xs">Visit our online shop</h2>

      <p className="merch-section-text u-font-md u-mb-md">
        Discounts on multiple shirts, stickers ship free
      </p>

      <p className="merch-section-text u-mb-md u-font-md">
        <a href="https://thewelcoming.square.site" target="_blank">
          thewelcoming.square.site
        </a>
      </p>
      <ul className="merch-list">
        {Merch.map((item) => (
          <MerchTile
            label={item.label}
            subhead={item.subhead}
            link={item.link}
            imgSrc={item.imgSrc}
            key={item.name}
          />
        ))}
      </ul>
    </section>
  );
}
