import Quotes from "/data/quotes.json";

import DefaultLayout from "/components/layout/DefaultLayout";

import HeroSection from "/components/layout/components/HeroSection";
import QuotesSection from "/components/layout/components/QuotesSection";

export default function About() {
  return (
    <DefaultLayout slug="about">
      <HeroSection title="About The Welcoming" pageSlug="about" />

      <QuotesSection quotes={Quotes.about} />
    </DefaultLayout>
  );
}
