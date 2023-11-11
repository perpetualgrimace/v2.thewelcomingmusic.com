import Quotes from "/data/quotes.json";

import DefaultLayout from "/components/layout/DefaultLayout";

import HeroSection from "/components/layout/components/HeroSection";
import QuotesSection from "/components/layout/components/QuotesSection";

export default function EPK() {
  return (
    <DefaultLayout slug="epk">
      <HeroSection title="Press Kit" pageSlug="epk" />

      <QuotesSection quotes={Quotes.epk} />
    </DefaultLayout>
  );
}
