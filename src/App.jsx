import { useEffect, useState } from "react";
import Logo from "./components/Logo";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 🔥 Cursor Glow Effect */}
      <div
        className="fixed w-40 h-40 bg-purple-500 opacity-20 blur-3xl pointer-events-none z-50"
        style={{
          left: pos.x - 80,
          top: pos.y - 80,
        }}
      ></div>

      {/* 🧷 Logo */}
      <Logo />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
