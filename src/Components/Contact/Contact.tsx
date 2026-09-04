import { CONTACT } from "src@/Constants";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="section-container section-divider pt-24 pb-8">
      <SectionHeading title="Get in" subtitle="Touch" />

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 text-center max-w-lg mx-auto space-y-6"
      >
        <p className="text-neutral-400 text-sm leading-relaxed">
          Open to new opportunities in software engineering, Generative AI, and
          full-stack development. Feel free to reach out.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href={`mailto:${CONTACT.gmail}`}
            className="inline-flex items-center gap-3 text-neutral-200 hover:text-accent-light transition-colors"
          >
            <FaEnvelope className="text-accent" />
            {CONTACT.gmail}
          </a>
          <a
            href={`tel:${CONTACT.number.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <FaPhone className="text-accent" />
            {CONTACT.number}
          </a>
        </div>
      </motion.div>

      <p className="text-center text-xs text-neutral-600 mt-16">
        © {new Date().getFullYear()} Beqa Elashvili. All rights reserved.
      </p>
    </section>
  );
}
