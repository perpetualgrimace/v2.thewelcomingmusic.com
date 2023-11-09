import Quotes from "/data/quotes.json";
import SocialLinks from "/data/socialLinks.json";

import loadIcon from "/helpers/loadIcon";

import DefaultLayout from "/components/layout/DefaultLayout";

import SocialLink from "/components/common/SocialLink";

import HeroSection from "/components/layout/components/HeroSection";
import ShowsSection from "/components/layout/components/ShowsSection";
import AlbumSection from "/components/layout/components/AlbumSection";
import QuotesSection from "/components/layout/components/QuotesSection";
import VideoSection from "/components/layout/components/VideoSection";

const heroSection = {
  title: "Exploring the gray area between rock and metal",
  subhead: "In Western NC and beyond",
  children: (
    <ul className="home-hero-social-list">
      {SocialLinks.map((link) => (
        <SocialLink href={link.href} Icon={loadIcon(link.icon)}>
          {link.label}
          {link?.smallText && (
            <span className="u-font-xs"> {link.smallText}</span>
          )}
        </SocialLink>
      ))}
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

      <QuotesSection
        title="Neptune appreciation"
        quotes={Quotes.neptune}
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

      <QuotesSection
        title="Decayed | Remade appreciation"
        quotes={Quotes["decayed-remade"]}
      />
    </DefaultLayout>
  );
}
