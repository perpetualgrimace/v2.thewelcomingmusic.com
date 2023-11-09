import SpotifyIcon from "/components/icons/social/SpotifyIcon.svg";
import BandcampIcon from "/components/icons/social/BandcampIcon.svg";
import TwitterIcon from "/components/icons/social/TwitterIcon.svg";
import InstagramIcon from "/components/icons/social/InstagramIcon.svg";
import YouTubeIcon from "/components/icons/social/YouTubeIcon.svg";
import FacebookIcon from "/components/icons/social/FacebookIcon.svg";

export default function loadIcon(icon) {
  if (icon === "Spotify") return <SpotifyIcon />;
  else if (icon === "Bandcamp") return <BandcampIcon />;
  else if (icon === "Twitter") return <TwitterIcon />;
  else if (icon === "Instagram") return <InstagramIcon />;
  else if (icon === "YouTube") return <YouTubeIcon />;
  else if (icon === "Facebook") return <FacebookIcon />;
}
