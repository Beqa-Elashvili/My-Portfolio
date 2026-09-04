import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs, SiMongodb, SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SKILL_GROUPS } from "src@/Constants";
import { SectionHeading } from "../ui/SectionHeading";

const ICON_MAP: Record<string, React.ReactNode> = {
  "Next.js": <SiNextdotjs className="text-4xl text-neutral-200" />,
  React: <FaReact className="text-4xl text-cyan-400" />,
  TypeScript: <SiTypescript className="text-4xl text-blue-500" />,
  JavaScript: <IoLogoJavascript className="text-4xl text-yellow-400" />,
  "Tailwind CSS": <RiTailwindCssFill className="text-4xl text-teal-400" />,
  Redux: <TbBrandRedux className="text-4xl text-purple-500" />,
  PostgreSQL: <BiLogoPostgresql className="text-4xl text-blue-400" />,
  MongoDB: <SiMongodb className="text-4xl text-green-500" />,
  Prisma: <SiPrisma className="text-4xl text-cyan-300" />,
  "Node.js": <FaNodeJs className="text-4xl text-green-500" />,
};

export function Technologies() {
  return (
    <section id="skills" className="section-container section-divider pt-24">
      <SectionHeading title="Technical" subtitle="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 bg-card-gradient"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {Object.entries(ICON_MAP).map(([name, icon]) => (
          <div
            key={name}
            title={name}
            className="glass-card p-3 hover:border-accent/30 transition-colors duration-200"
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
