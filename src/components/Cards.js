import "./CardsStyles.css";
import p1 from "../assets/plakat1.jpg";
import p6 from "../assets/plakat6.jpg";
import p3 from "../assets/plakat3.jpg";
import p5 from "../assets/plakat5.jpg";
import p2 from "../assets/plakat2.jpg";
import p4 from "../assets/plakat4.jpg";

import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <h1 className="project-heading">Ostali radovi</h1>
      <div className="card-container">
        <div className="card">
          <h3>Plakat za festival</h3>
          <span className="bar"></span>
          <p className="btc">Jazz festival</p>
          <img className="ostaliProjekti" src={p1} alt="plakat1" />
          <p>plakat za izmišljeni festival</p>

          <p>Adobe Illustrator</p>
          <p>2020.</p>

          <div
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1X6TXj0tsfiX5biw-YoTewJI-GkicopTg/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            OTVORI
          </div>
        </div>

        <div className="card">
          <h3>Izložba na velesajmu</h3>
          <span className="bar"></span>
          <p className="btc">PEEK&POKE</p>
          <img className="ostaliProjekti" src={p2} alt="plakat2" />
          <p>plakat za izmišljenu izložbu</p>
          <p>Adobe Illustrator</p>
          <p>2020.</p>
          <div
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/drive/folders/1Wxg0w56tXFitXBvMexFJDKAmBT7UXjUa?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            OTVORI
          </div>
        </div>

        <div className="card">
          <h3>Brošura za planinarenje</h3>
          <span className="bar"></span>
          <p className="btc">Vinicunca</p>
          <img className="ostaliProjekti" src={p3} alt="plakat3" />
          <p>planina 7 boja</p>
          <p>Adobe InDesign</p>
          <p>2022.</p>
          <div
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1kSuGrzEQun3uS7ilog6Z8C2Un2lruZ1I/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            OTVORI
          </div>
        </div>

        <div className="card">
          <h3>Grafički dizajn</h3>
          <span className="bar"></span>
          <p className="btc">Izrada logotipa</p>
          <img className="ostaliProjekti" src={p4} alt="plakat4" />
          <p>SOPG Bakale</p>
          <p>Adobe Illustrator</p>
          <p>2022.</p>
          {/*<div
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1c_3TIRQoOLLQ_vPf9MGfeGTa3xL6ngSu/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            OTVORI
          </div>*/}
        </div>

        <div className="card">
          <h3>Grafički dizajn</h3>
          <span className="bar"></span>
          <p className="btc">Vlastiti logo</p>
          <img className="ostaliProjekti" src={p5} alt="plakat5" />
          <p>logo iz inicijala</p>
          <p>Adobe Illustrator</p>
          <p>2022.</p>
          {/*<div
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1N5ekWGyoxWHaZNfgBtHnrGBIEToxZflV/view?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            OTVORI
          </div> */}
        </div>

        <div className="card">
          <h3>Izrada 3D modela</h3>
          <span className="bar"></span>
          <p className="btc">Vjetrenjača</p>
          <img className="ostaliProjekti" src={p6} alt="plakat6" />
          <p>western</p>
          <p>Blender, Substance Painter</p>
          <p>2022.</p>
          {/*<div
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/drive/folders/1n63Ci_GYyzV4vKdokdmLZqZLyYGnpFqo?usp=sharing",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            OTVORI
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Cards;
