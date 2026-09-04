import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Technologies } from "./Components/Technologies";
import { Experience } from "./Components/Experience";
import { Projects } from "./Components/ProjectsComp";
import { Education } from "./Components/Education";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-surface bg-hero-gradient">
      <div className="mx-auto px-6 md:px-12 lg:px-20 pb-24 flex flex-col gap-4">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
