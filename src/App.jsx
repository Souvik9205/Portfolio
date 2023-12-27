import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills";
import Hire from "./components/Hire";

function App() {

  return (
    <main className="text-cyan-100 bg-cyan-500 body-font" id="body">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Hire />
    </main>
  );
}

export default App
