import { PROJECTES } from "src@/Constants";
import { ProjectType } from "src@/assets/types";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
export function Projects() {
  return (
    <div className="border-t border-neutral-800 py-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTES.map((item: ProjectType, index: number) => (
          <div
            key={item.id}
            className="mt-8 flex flex-wrap gap-4 lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full flex justify-center lg:w-1/4 lg:mb-0 mb-4"
            >
              <img src={item.image} className=" h-40 rounded" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="lg:w-3/6 flex flex-col gap-2"
            >
              <h6 className="font-semibold">{item.title}</h6>
              <p className="text-sm text-neutral-400">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((item: string, index: number) => (
                  <p
                    key={index}
                    className="rounded text-sm bg-neutral-900 px-2 py-1 font-medium text-purple-600"
                  >
                    {item}
                  </p>
                ))}
                {item.live !== "" && (
                  <div className="">
                    <a
                      className=" hover:bg-gray-900 flex items-center gap-2 rounded text-sm bg-neutral-900 px-2 py-1 font-medium text-blue-300"
                      href={item.live}
                    >
                      <CiGlobe />
                      Live
                    </a>
                  </div>
                )}
                <a
                  className="flex hover:bg-gray-900 items-center gap-2 rounded text-sm bg-neutral-900 px-2 py-1 font-medium text-blue-300"
                  href={item.code}
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
            {index !== PROJECTES.length - 1 && (
              <div className="border-b py-4 h-2 border-neutral-800 w-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
