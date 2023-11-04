import Link from "next/link";
import DefaultLayout from "/components/layout/DefaultLayout";

import HeroSection from "/components/layout/components/HeroSection";
import MulticolSection from "/components/layout/components/MulticolSection";
import TextSection from "/components/layout/components/TextSection";

const heroSection = {
  title: "Exploring the gray area between rock and metal",
  subhead: "In Western NC and beyond",
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
        />
      )}

      {sections?.map((section) => generateLayout(section))}
    </DefaultLayout>
  );
}
