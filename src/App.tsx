import { MotionConfig } from "framer-motion";
import { ClosingSection } from "./components/ClosingSection";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { PoetryChapter } from "./components/PoetryChapter";
import { PortfolioStrip } from "./components/PortfolioStrip";
import { SectionNav } from "./components/SectionNav";
import { chapters, galleryImages, sectionLinks, siteMeta } from "./data/chapters";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="editorial-shell min-h-screen bg-[#05070b] text-stone-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-40 focus:rounded-full focus:bg-[#0f1520] focus:px-4 focus:py-3 focus:font-sans focus:text-sm focus:text-stone-100"
        >
          Skip to content
        </a>

        <SectionNav sections={sectionLinks} />

        <main id="main-content">
          <Hero
            image={siteMeta.heroImage}
            alt={siteMeta.heroAlt}
            title={siteMeta.title}
            subtitle={siteMeta.subtitle}
          />

          <IntroSection text={siteMeta.intro} />

          {chapters.map((chapter) => (
            <PoetryChapter key={chapter.id} {...chapter} />
          ))}

          <ClosingSection text={siteMeta.closing} creator={siteMeta.creator} />

          <PortfolioStrip images={galleryImages} creator={siteMeta.creator} />
        </main>
      </div>
    </MotionConfig>
  );
}
