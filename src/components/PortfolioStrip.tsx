import { motion } from "framer-motion";
import type { GalleryImage } from "../data/chapters";

type PortfolioStripProps = {
  images: GalleryImage[];
  creator: string;
};

export function PortfolioStrip({ images, creator }: PortfolioStripProps) {
  return (
    <section
      id="portfolio"
      className="border-t border-white/8 bg-[#05070b] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p
              id="portfolio-heading"
              className="font-sans text-[0.76rem] uppercase tracking-[0.4em] text-stone-300/56"
            >
              Portfolio Closing
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-stone-100 sm:text-5xl">
              The poem returns to the photographs.
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm leading-7 text-stone-300/70">
            A final filmstrip of the same landscapes, held now as a small body of work rather than only as illustration.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[14rem]">
          {images.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/4 ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04070b]/86 via-[#04070b]/18 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-serif text-2xl text-stone-50">{item.title}</p>
                <p className="mt-2 max-w-sm font-sans text-sm leading-6 text-stone-200/72">
                  {item.note}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 font-sans text-sm text-stone-400/66">
          {creator} / ENGL200A Mediation Creation Project
        </div>
      </div>
    </section>
  );
}
