import { motion } from "framer-motion";

type ClosingSectionProps = {
  text: string;
  creator: string;
};

export function ClosingSection({ text, creator }: ClosingSectionProps) {
  return (
    <section
      id="closing"
      className="relative border-t border-white/8 bg-[linear-gradient(180deg,#0a0d11_0%,#10151d_100%)] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      aria-labelledby="closing-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            id="closing-heading"
            className="font-sans text-[0.76rem] uppercase tracking-[0.4em] text-stone-300/56"
          >
            Closing
          </p>
          <p className="mt-6 max-w-4xl font-serif text-3xl leading-[1.24] text-stone-100/92 sm:text-4xl lg:text-[3.2rem]">
            {text}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 border-t border-white/10 pt-7 font-sans text-sm text-stone-300/72 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>Original photography and web direction by {creator}</p>
          <p className="uppercase tracking-[0.28em] text-stone-400/60">Visual poetry / portfolio study</p>
        </motion.div>
      </div>
    </section>
  );
}
