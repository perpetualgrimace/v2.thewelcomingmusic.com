import Stats from "/data/stats.json";

import loadIcon from "/helpers/loadIcon";

import StatTile from "/components/layout/components/StatTile";

const { neptune, decayedRemade, followers } = Stats;
const {
  spotifyListeners,
  twitterFollowers,
  facebookFollowers,
  instagramFollowers,
} = followers;

export default function StatsSection() {
  return (
    <section className="stats-section">
      <h2 className="u-visually-hidden">
        Recent releases and social media followers
      </h2>

      <StatTile
        title="Neptune EP"
        subhead={makeReleaseDate(neptune.releaseDate)}
        imgSrc="artwork/neptune"
        imgClass="stat-tile-album-img stat-tile-img"
      >
        {makeAlbumTile(neptune)}
      </StatTile>

      <StatTile
        title="Decayed | Remade"
        subhead={makeReleaseDate(decayedRemade.releaseDate)}
        imgSrc="artwork/decayed-remade"
        imgClass="stat-tile-album-img stat-tile-img"
      >
        {makeAlbumTile(decayedRemade)}
      </StatTile>

      <StatTile
        title="Media statistics"
        imgSrc="thumbnail/epk-2"
        imgClass="stat-tile-img"
      >
        <ul className="stat-list">
          <li className="stat">
            {loadIcon("Spotify")} {spotifyListeners} monthly listeners
          </li>
          <li className="stat">
            {loadIcon("Twitter")} {twitterFollowers} followers
          </li>
          <li className="stat">
            {loadIcon("Facebook")} {facebookFollowers} followers
          </li>
          <li className="stat">
            {loadIcon("Instagram")} {instagramFollowers} followers
          </li>
        </ul>
      </StatTile>
    </section>
  );
}

function makeReleaseDate(releaseDate) {
  return (
    <>
      Released <strong>{releaseDate}</strong>
    </>
  );
}

function makeAlbumTile(statObj) {
  const { spotifyPlays, bandcampSales, topTrack } = statObj;
  return (
    <ul className="stat-list">
      <li className="stat">
        {loadIcon("Spotify")} {spotifyPlays} plays
      </li>
      <li className="stat">
        {loadIcon("Bandcamp")} {bandcampSales} sales
      </li>
      <li className="stat">
        Top track <br />
        {topTrack.title}
        {topTrack.spotifyPlays} plays
      </li>
    </ul>
  );
}
