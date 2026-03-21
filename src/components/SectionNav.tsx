import { useEffect, useState } from "react";

type SectionNavProps = {
  sections: Array<{ id: string; label: string }>;
};

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    const observedSections = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-18% 0px -18% 0px",
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <a
        href="#hero"
        className="fixed left-6 top-5 z-30 hidden font-sans text-[0.72rem] uppercase tracking-[0.4em] text-stone-100/72 backdrop-blur-sm lg:block"
      >
        Pilgrimage
      </a>

      <nav
        aria-label="Section navigation"
        className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 gap-4 rounded-full border border-white/10 bg-[#070a0f]/40 px-3 py-4 backdrop-blur-md lg:flex"
      >
        <ol className="flex flex-col items-center gap-3">
          {sections.map((section) => {
            const isActive = section.id === activeSection;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-label={section.label}
                  aria-current={isActive ? "location" : undefined}
                  className="group flex h-3 w-3 items-center justify-center rounded-full"
                >
                  <span
                    className={`h-2 w-2 rounded-full border transition duration-300 ${
                      isActive
                        ? "border-stone-50 bg-stone-50"
                        : "border-stone-300/45 bg-transparent group-hover:border-stone-100/80"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
