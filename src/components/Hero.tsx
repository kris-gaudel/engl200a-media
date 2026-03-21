import { motion } from "framer-motion";

type HeroProps = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
};

export function Hero({ image, alt, title, subtitle }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-end overflow-hidden"
      aria-label="Hero"
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(254,214,152,0.16),transparent_34%),linear-gradient(180deg,rgba(5,8,13,0.18)_0%,rgba(5,8,13,0.45)_55%,rgba(5,8,13,0.86)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-10 pt-28 sm:px-8 sm:pb-14 lg:px-12 lg:pb-18"
      >
        <div className="max-w-3xl">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.4em] text-stone-200/75">
            Geoffrey Chaucer / General Prologue
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-6xl leading-[0.92] font-medium text-white text-balance sm:text-7xl lg:text-[7.5rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-100/82 sm:text-lg sm:leading-8">
            {subtitle}
          </p>
        </div>

        <div className="flex items-end justify-between gap-6">
          <p className="max-w-sm font-sans text-[0.78rem] leading-6 tracking-[0.24em] text-stone-200/62 uppercase">
            A one-page visual essay in landscape, distance, and longing.
          </p>

          <a
            href="#intro"
            className="group inline-flex items-center gap-3 self-start font-sans text-[0.72rem] uppercase tracking-[0.35em] text-stone-100/72 transition hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0d11]"
          >
            <span>Scroll</span>
            <span className="flex h-10 w-6 items-start justify-center rounded-full border border-stone-100/26 p-1">
              <span className="h-2 w-1 rounded-full bg-stone-100/75 transition duration-700 group-hover:translate-y-3 motion-safe:animate-[scrollCue_2.6s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
