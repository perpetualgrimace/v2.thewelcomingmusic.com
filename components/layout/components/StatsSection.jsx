import Stats from "/data/stats.json";

import StatTile from "/components/layout/components/StatTile";

const { neptune, decayedRemade } = Stats;

export default function StatsSection() {
  return (
    <section className="stats-section">
      <h2 className="u-visually-hidden">
        Recent releases and social media followers
      </h2>

      <StatTile
        title="Neptune EP"
        subhead={makeReleaseDate(neptune.releaseDate)}
      >
        {makeAlbumTile(neptune)}
      </StatTile>

      <StatTile
        title="Decayed | Remade"
        subhead={makeReleaseDate(decayedRemade.releaseDate)}
      >
        {makeAlbumTile(decayedRemade)}
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
  return <div className="stat-tile-album">{statObj.spotifyPlays}</div>;
}
