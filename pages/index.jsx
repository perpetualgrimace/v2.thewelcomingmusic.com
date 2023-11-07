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

const sections = [];

function generateLayout(section) {
  if (section?.layout === "multicol") {
    return (
      <MulticolSection
        key={section?.title}
        title={section?.title}
        slug={section?.slug}
        columns={section?.columns}
      />
    );
  }
  // text section assumed
  else {
    return (
      <TextSection
        key={section?.title}
        title={section?.title}
        slug={section?.slug}
      >
        {section?.text}
      </TextSection>
    );
  }
}

export default function Home() {
  return (
    <DefaultLayout slug="home" sections={sections}>
      {heroSection && (
        <HeroSection
          title={heroSection?.title}
          subhead={heroSection?.subhead}
          pageSlug="home"
          children={heroSection?.children}
        />
      )}

      {sections?.map((section) => generateLayout(section))}
    </DefaultLayout>
  );
}
