import React from "react";
import Navbar from "./components/Navbar.js/Navbar";
import Banner from "./components/Banner/Banner.jsx";
import Photoshoot from "./components/Photoshoot/Photoshoot";
import Packages from "./components/Packages/Packages";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Qurstions from "./components/Questions/Qurstions";

const App = () => {
  return (
   <>
    <header>
      <Navbar />
      <Banner/>
    </header>
    <main>
      <Photoshoot/>
      <Packages/>
      <Clients/>
      <Qurstions></Qurstions>
    </main>
    <Footer/>
    </>
  );
};

export default App;
