import Quotes from "/data/quotes.json";

import DefaultLayout from "/components/layout/DefaultLayout";

import HeroSection from "/components/layout/components/HeroSection";
import ImgTextSection from "/components/layout/components/ImgTextSection";
import QuotesSection from "/components/layout/components/QuotesSection";
import StatsSection from "/components/layout/components/StatsSection";

export default function EPK() {
  return (
    <DefaultLayout slug="epk" title="Press kit">
      <HeroSection title="Press Kit" pageSlug="epk" />

      <ImgTextSection title="You won’t be bored" imgSrc="thumbnail/epk-1">
        <p>
          The Welcoming is a genre-bending rock and/or metal band from
          Asheville, NC. With a sound that mixes big riffs, soaring vocal
          melodies, and just enough technicality to keep you on your toes,
          we make music for fans of bands like Thrice, Cave In, A Perfect
          Circle, and Coheed & Cambria.
        </p>
        <p>
          Since starting as the solo project of James Ferrell in late
          2021, the band has been busy playing shows, festivals, and
          weekend tours in multiple states and cities, and our songs have
          been played on the air in multiple countries.
        </p>
      </ImgTextSection>

      <StatsSection />

      <QuotesSection quotes={Quotes.epk} />
    </DefaultLayout>
  );
}
