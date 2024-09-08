import { CONTACT } from "src@/Constants";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <div className="flex flex-col gap-2 items-center border-neutral-800 border-t py-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl"
      >
        GET IN TOUCH
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        {CONTACT.number}
      </motion.p>
      <motion.a
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        href="#"
        className="hover:underline"
      >
        {CONTACT.gmail}
      </motion.a>
    </div>
  );
}
