import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Cards from "../components/Cards";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 naslov="MOJI PROJEKTI" />
      <Work />
      <Cards />
      <Footer />
    </div>
  );
};

export default Project;
