import { motion } from "framer-motion";

type IntroSectionProps = {
  text: string;
};

export function IntroSection({ text }: IntroSectionProps) {
  return (
    <section
      id="intro"
      className="relative border-t border-white/8 bg-[#0a0d11] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            id="intro-heading"
            className="font-sans text-[0.76rem] uppercase tracking-[0.38em] text-stone-300/56"
          >
            Introduction
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.92, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="max-w-3xl font-serif text-3xl leading-[1.24] text-stone-100/90 sm:text-4xl lg:text-[2.95rem]">
            {text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
