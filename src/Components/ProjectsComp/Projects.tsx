import { PROJECTES } from "src@/Constants";
import { ProjectType } from "src@/assets/types";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export function Projects() {
  return (
    <div className="border-t border-neutral-800 py-8">
      <h1 className="text-center text-4xl">Projects</h1>
      <div>
        {PROJECTES.map((item: ProjectType, index: number) => (
          <div
            key={item.id}
            className="mt-8 flex flex-wrap gap-4 lg:justify-center"
          >
            <div className="w-full flex items-center justify-center lg:w-1/4 lg:mb-0 mb-4">
              <img src={item.image} className=" h-40 rounded" />
            </div>
            <div className="lg:w-3/6 flex flex-col gap-2">
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
            </div>
            {index !== PROJECTES.length - 1 && (
              <div className="border-b py-4 h-2 border-neutral-800 w-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
