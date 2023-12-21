import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills";
import Hire from "./components/Hire";

function App() {

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Hire />
    </main>
  );
}

export default App
