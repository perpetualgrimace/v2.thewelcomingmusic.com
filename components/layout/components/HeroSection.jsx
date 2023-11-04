export default function HeroSection(props) {
  const { slug, pageSlug, title, subhead, children } = props;
  return (
    <section
      className={`padded-section hero-section ${pageSlug}-hero-section`}
      id={slug || "hero-section"}
    >
      <h1 className="u-title hero-title u-mb-lg">
        {title || "missing `title` prop"}
        {subhead && (
          <span className="hero-subhead u-subhead u-font-lg">
            {" "}
            {subhead}
          </span>
        )}
      </h1>

      {children}

      <picture className="hero-bg">
        <source
          media="(max-width:665px)"
          srcSet={`
            /hero/${pageSlug}-hero-vertical-400w.jpg 400w,
            /hero/${pageSlug}-hero-vertical-800w.jpg 800w
          `}
        />
        <source
          media="(min-width:666px)"
          srcSet={`
            /hero/${pageSlug}-hero-1200w.jpg 1200w,
            /hero/${pageSlug}-hero-2400w.jpg 2400w
          `}
        />
        <img src="/hero/${pageSlug}-hero-1200w.jpg" alt="" />
      </picture>
    </section>
  );
}
