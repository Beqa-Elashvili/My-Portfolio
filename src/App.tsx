import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";

function App() {
  return (
    <div className="absolute text-neutral-200 overflow-x-hidden mx-auto  inset-0 -z-10 h-full w-full py-12 px-16 flex flex-col gap-36 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
