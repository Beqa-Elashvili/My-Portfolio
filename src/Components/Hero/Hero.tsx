import { motion } from "framer-motion";

export function Hero() {
  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="font-thin flex flex-col items-center justify-center text-center lg:items-start lg:text-start">
      <motion.h1
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="text-6xl"
      >
        BEQA ELASHVILI
      </motion.h1>
      <motion.p
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="text-4xl mt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight"
      >
        Junior React Front-end Developer
      </motion.p>
      <motion.p
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="max-w-xl mt-8"
      >
        Hello, I am an experienced React Front-End Developer with a strong
        passion for building modern, responsive, and dynamic web applications.
        My skill set includes: React and Next.js for building scalable and
        efficient applications TypeScript and JavaScript for writing clean.
      </motion.p>
    </div>
  );
}
