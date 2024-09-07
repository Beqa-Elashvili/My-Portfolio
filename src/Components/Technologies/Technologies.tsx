import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";

export function Technologies() {
  return (
    <div>
      <h1 className="text-3xl text-center mb-4">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-cyan-400 text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-yellow-500 text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-blue-500 bg-white rounded-2xl text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-green-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiStyledcomponents className="text-7xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAntdesign className="text-7xl text-blue-400" />
        </div>
      </div>
    </div>
  );
}
