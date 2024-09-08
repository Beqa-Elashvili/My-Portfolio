import { EXPERIENCES } from "src@/Constants";
import { Experiencetype } from "src@/assets/types";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <div className="border-t py-8 border-neutral-800">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl text-center"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((item: Experiencetype, index: number) => (
          <div key={item.id} className="mt-8 flex flex-wrap lg:justify-center">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-sm text-neutral-400 mb-2 lg:mb-0 lg:w-1/4"
            >
              {item.year}
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="lg:w-3/6 flex flex-col gap-2"
            >
              <h6 className="font-semibold">
                {item.role} -{" "}
                <span className="text-sm text-purple-100">{item.company}</span>
              </h6>
              <p className="text-sm text-neutral-400">{item.description}</p>
              <div className="flex gap-2">
                {item.technologies.map((item: string, index: number) => (
                  <p
                    key={index}
                    className="rounded text-sm bg-neutral-900 px-2 py-1 font-medium text-purple-600"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
            {index !== EXPERIENCES.length - 1 && (
              <div className="border-b py-4 h-2 border-neutral-800 w-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
