import { motion } from "framer-motion";
import image from "src@/assets/images/Hero.jpg";

export function Hero() {
  const fadeUp = (delay: number) => ({
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay },
    },
  });

  return (
    <section className="section-container pt-8 md:pt-16">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="text-sm font-medium tracking-widest uppercase text-accent-light mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Beqa Elashvili
          </motion.h1>

          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl mt-4 font-light text-neutral-400"
          >
            Generative AI &{" "}
            <span className="bg-gradient-to-r from-accent-light to-violet-400 bg-clip-text text-transparent font-medium">
              Full-Stack Developer
            </span>
          </motion.p>

          <motion.p
            variants={fadeUp(0.35)}
            initial="hidden"
            animate="visible"
            className="mt-6 text-neutral-400 leading-relaxed text-base md:text-lg"
          >
            I build scalable, high-performance web and AI-powered applications
            with React, Next.js, TypeScript, and modern LLM integrations.
            Passionate about intelligent, user-centric experiences and
            production-ready software.
          </motion.p>

          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-accent hover:bg-accent-muted text-white text-sm font-medium transition-colors duration-200 shadow-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg border border-surface-border hover:border-accent/50 text-neutral-300 text-sm font-medium transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-violet-600/20 blur-xl" />
          <img
            className="relative w-64 md:w-72 lg:w-80 rounded-2xl shadow-card object-cover aspect-square"
            src={image}
            alt="Beqa Elashvili"
          />
        </motion.div>
      </div>
    </section>
  );
}
