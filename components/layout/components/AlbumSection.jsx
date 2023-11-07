import RetinaImg from "/components/common/RetinaImg";

import SpotifyIcon from "/components/icons/social/SpotifyIcon.svg";
import BandcampIcon from "/components/icons/social/BandcampIcon.svg";
import SocialLink from "/components/common/SocialLink";

export default function AlbumSection(props) {
  const { imgSrc, bgImgSrc, title, subhead, spotifyLink, bandcampLink } =
    props;
  return (
    <section className="album-section padded-section">
      <RetinaImg
        className="album-section-img"
        file={`artwork/${imgSrc}`}
        extension="jpg"
      />

      <div className="album-section-caption">
        <h2 className="u-title u-mb-0">{title || "missing title"}</h2>

        <p className="u-font-lg u-subhead u-mb-xl">{subhead}</p>

        <ul className="album-section-social-list">
          <SocialLink
            href={spotifyLink}
            Icon={<SpotifyIcon />}
            theme="light"
          >
            Listen on Spotify
          </SocialLink>
          <SocialLink
            href={bandcampLink}
            Icon={<BandcampIcon />}
            theme="light"
          >
            Listen on Bandcamp
          </SocialLink>
        </ul>
      </div>

      <RetinaImg
        className="album-section-bg"
        file={`bg/${bgImgSrc}`}
        extension="jpg"
      />
    </section>
  );
}
