import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ParticlesComponent from "./components/ParticalsComponent";
import Socials from "./components/Socials";
import Welcome from "./pages/Welcome";

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="fixed h-screen w-screen overflow-hidden text-text selection:bg-primary/50">
      <Background />
      <ParticlesComponent />
      <Socials />
      {selected === 0 ? <Welcome /> : null}
      {selected === 1 ? <About setSelected={setSelected} /> : null}
      {selected === 2 ? <Portfolio /> : null}
      {selected === 3 ? <Contact /> : null}
      <NavBar selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
