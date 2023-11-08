import DefaultLayout from "/components/layout/DefaultLayout";

import SpotifyIcon from "/components/icons/social/SpotifyIcon.svg";
import BandcampIcon from "/components/icons/social/BandcampIcon.svg";
import TwitterIcon from "/components/icons/social/TwitterIcon.svg";
import InstagramIcon from "/components/icons/social/InstagramIcon.svg";
import YouTubeIcon from "/components/icons/social/YouTubeIcon.svg";
import FacebookIcon from "/components/icons/social/FacebookIcon.svg";

import SocialLink from "/components/common/SocialLink";

import HeroSection from "/components/layout/components/HeroSection";
import MulticolSection from "/components/layout/components/MulticolSection";
import TextSection from "/components/layout/components/TextSection";
import ShowsSection from "/components/layout/components/ShowsSection";
import AlbumSection from "/components/layout/components/AlbumSection";
import VideoSection from "/components/layout/components/VideoSection";

const heroSection = {
  title: "Exploring the gray area between rock and metal",
  subhead: "In Western NC and beyond",
  children: (
    <ul className="home-hero-social-list">
      <SocialLink
        href="https://open.spotify.com/artist/78rZxY5ov2LunHaBHNDLxb"
        Icon={<SpotifyIcon />}
      >
        Listen on Spotify
      </SocialLink>
      <SocialLink
        href="https://thewelcoming.bandcamp.com"
        Icon={<BandcampIcon />}
      >
        Support us on Bandcamp
      </SocialLink>
      <SocialLink
        href="https://www.twitter.com/the_welcoming"
        Icon={<TwitterIcon />}
      >
        Get trolled on Twitter
        <span className="u-font-xs"> (we don't call it X)</span>
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/thewelcomingmusic"
        Icon={<InstagramIcon />}
      >
        Photos & videos on Instagram
      </SocialLink>
      <SocialLink
        href="https://www.youtube.com/@thewelcomingmusic"
        Icon={<YouTubeIcon />}
      >
        Performances on YouTube
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/thewelcomingmusic"
        Icon={<FacebookIcon />}
      >
        Leftovers on Facebook
      </SocialLink>
    </ul>
  ),
};

export default function Home() {
  return (
    <DefaultLayout slug="home">
      <HeroSection
        title={heroSection?.title}
        subhead={heroSection?.subhead}
        pageSlug="home"
        children={heroSection?.children}
      />

      <ShowsSection />

      <AlbumSection
        title="Neptune EP"
        subhead="Out now"
        spotifyLink="https://open.spotify.com/album/69cdXkVgVecRR3vPLzuNVt?si=ohEnXlc0S8eFtdeKWuKblA"
        bandcampLink="https://thewelcoming.bandcamp.com/album/neptune-ep"
        imgSrc="neptune"
        bgImgSrc="neptune-blue"
      />

      <VideoSection
        title="The Making of Neptune"
        subhead="Docuseries"
        videoUrl="https://www.youtube.com/embed/kp-Ybvr60W4?si=A6gfbWqHkW3m_5Fn"
        bgImgSrc="neptune-purple"
      />

      <AlbumSection
        title="Decayed | Remade"
        subhead="The debut album"
        spotifyLink="https://open.spotify.com/album/3gJgrfKZd0SlY1FpOQrP0K?si=yVPBBHvZTYSFbK1cDSdJkw"
        bandcampLink="https://thewelcoming.bandcamp.com/album/decayed-remade"
        imgSrc="decayed-remade"
        bgImgSrc="decayed-remade"
      />
    </DefaultLayout>
  );
}
