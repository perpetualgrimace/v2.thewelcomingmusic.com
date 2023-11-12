import Upcoming from "/data/shows.json";

import ShowTile from "/components/layout/components/ShowTile";

export const songkickLink =
  "https://www.songkick.com/artists/10227128-welcoming";
export const bandsintownLink = "https://www.bandsintown.com/a/15509125";
export const facebookEventsLink =
  "https://www.facebook.com/thewelcomingmusic/events";

export default function ShowsSection() {
  if (!Upcoming) return null;

  return (
    <section className="shows-section u-text-c">
      <h2 className="u-title u-mb-xxs">Upcoming events</h2>
      <p className="u-mb-lg">
        Powered by{" "}
        <a href={songkickLink} target="_blank">
          Songkick
        </a>
      </p>

      <ul className="shows-list">
        {Upcoming.map((show, i) => (
          <ShowTile
            date={show.date}
            venue={show.venue}
            city={show.city}
            href={show.link}
            index={i}
            key={show.date}
          />
        ))}
      </ul>
    </section>
  );
}
