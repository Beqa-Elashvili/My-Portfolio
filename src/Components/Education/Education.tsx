import { motion } from "framer-motion";
import { EDUCATION } from "src@/Constants";
import { SectionHeading } from "../ui/SectionHeading";

export function Education() {
  return (
    <section className="section-container section-divider pt-24">
      <SectionHeading title="Education" />

      <div className="space-y-4">
        {EDUCATION.map((item, index) => (
          <motion.div
            key={item.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div className="space-y-1">
              <h3 className="font-semibold text-neutral-100">{item.degree}</h3>
              <p className="text-accent-light text-sm">{item.institution}</p>
              <p className="text-sm text-neutral-400 pt-2">{item.description}</p>
            </div>
            <span className="text-xs text-neutral-500 whitespace-nowrap shrink-0">
              {item.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
