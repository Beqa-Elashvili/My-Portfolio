import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Technologies } from "./Components/Technologies";
import { Experience } from "./Components/Experience";
import { Projects } from "./Components/ProjectsComp";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div className="absolute text-neutral-200 overflow-x-hidden mx-auto  inset-0 -z-10 h-full w-full py-12 px-8 lg:px-28 flex flex-col gap-36 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
