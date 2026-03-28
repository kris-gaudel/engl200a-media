import { motion } from "framer-motion";
import type { Chapter } from "../data/chapters";

const alignments: Record<Chapter["align"], string> = {
  left: "justify-start text-left",
  right: "justify-end text-left",
  center: "justify-center text-center",
};

const widths: Record<Chapter["align"], string> = {
  left: "max-w-2xl",
  right: "max-w-2xl",
  center: "max-w-3xl",
};

export function PoetryChapter({
  id,
  marker,
  line,
  translation,
  gloss,
  explanation,
  image,
  alt,
  align,
  objectPosition,
  overlayClassName,
}: Chapter) {
  return (
    <section
      id={id}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden border-t border-white/8 px-6 py-10 sm:px-8 lg:px-12"
      aria-labelledby={`${id}-line`}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
        loading="lazy"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />

      <div className={`relative z-10 mx-auto flex w-full max-w-7xl ${alignments[align]}`}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className={`${widths[align]}`}
        >
          <h2 className="sr-only">Chapter {marker}</h2>
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-stone-200/62">
            Chapter {marker}
          </p>
          <blockquote
            id={`${id}-line`}
            className="mt-5 font-serif text-4xl leading-[1.08] text-white text-balance sm:text-5xl lg:text-[4.2rem]"
          >
            {line}
          </blockquote>
          <p
            className={`mt-6 max-w-xl font-sans text-sm leading-7 text-stone-100/72 sm:text-base ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {gloss}
          </p>
          <dl className="mt-8 grid gap-6 border-t border-white/14 pt-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 sm:pt-7">
            <div>
              <dt className="font-sans text-[0.68rem] uppercase tracking-[0.32em] text-stone-300/58">
                Modern Translation
              </dt>
              <dd className="mt-3 font-sans text-sm leading-7 text-stone-100/82 sm:text-[0.97rem]">
                {translation}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[0.68rem] uppercase tracking-[0.32em] text-stone-300/58">
                Visual Translation
              </dt>
              <dd className="mt-3 font-sans text-sm leading-7 text-stone-100/72 sm:text-[0.97rem]">
                {explanation}
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
