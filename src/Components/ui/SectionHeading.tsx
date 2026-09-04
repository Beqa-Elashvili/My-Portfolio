import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  id?: string;
};

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
        {subtitle && (
          <span className="text-neutral-500 font-normal"> {subtitle}</span>
        )}
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-light" />
    </motion.div>
  );
}
