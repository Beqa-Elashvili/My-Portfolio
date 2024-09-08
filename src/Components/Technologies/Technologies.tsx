import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear" as "linear",
      repeat: Infinity,
      repeatType: "reverse" as "reverse",
    },
  },
});

export function Technologies() {
  return (
    <div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl text-center mb-4"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-cyan-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-yellow-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-blue-500 bg-white rounded-2xl text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-green-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiStyledcomponents className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNextdotjs className="text-7xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
