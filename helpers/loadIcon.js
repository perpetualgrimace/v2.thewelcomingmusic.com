import AmazonMusicIcon from "/components/icons/social/AmazonMusicIcon.svg";
import AppleMusicIcon from "/components/icons/social/AppleMusicIcon.svg";
import BandcampIcon from "/components/icons/social/BandcampIcon.svg";
import DeezerIcon from "/components/icons/social/DeezerIcon.svg";
import FacebookIcon from "/components/icons/social/FacebookIcon.svg";
import IHeartRadioIcon from "/components/icons/social/IHeartRadioIcon.svg";
import InstagramIcon from "/components/icons/social/InstagramIcon.svg";
import PandoraIcon from "/components/icons/social/PandoraIcon.svg";
import SpotifyIcon from "/components/icons/social/SpotifyIcon.svg";
import TidalIcon from "/components/icons/social/TidalIcon.svg";
import BlueskyIcon from "/components/icons/social/BlueskyIcon.svg";
import YouTubeIcon from "/components/icons/social/YouTubeIcon.svg";
import YouTubeMusicIcon from "/components/icons/social/YouTubeMusicIcon.svg";

export default function loadIcon(icon) {
  if (icon === "AmazonMusic") return <AmazonMusicIcon />;
  else if (icon === "AppleMusic") return <AppleMusicIcon />;
  else if (icon === "Bandcamp") return <BandcampIcon />;
  else if (icon === "Deezer") return <DeezerIcon />;
  else if (icon === "Facebook") return <FacebookIcon />;
  else if (icon === "IHeartRadio") return <IHeartRadioIcon />;
  else if (icon === "Instagram") return <InstagramIcon />;
  else if (icon === "Pandora") return <PandoraIcon />;
  else if (icon === "Spotify") return <SpotifyIcon />;
  else if (icon === "Tidal") return <TidalIcon />;
  else if (icon === "Bluesky") return <BlueskyIcon />;
  else if (icon === "YouTube") return <YouTubeIcon />;
  else if (icon === "YouTubeMusic") return <YouTubeMusicIcon />;
}
