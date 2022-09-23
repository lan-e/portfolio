import "./CardsStyles.css"
import p1 from "../assets/jazz.png"
import p2 from "../assets/windmill.png"
import p3 from "../assets/page2.png"
import p4 from "../assets/logo1.png"
import p5 from "../assets/plakat.png"

import React from 'react'
import { Link } from "react-router-dom"

const Cards = () => {
  return (
    
    <div className="cards">
        <h1 className="project-heading">Ostali radovi</h1>
        <div className="card-container">
            <div className="card">
                <h3>Plakat za festival</h3>
                <span className="bar"></span>
                <p className="btc">Jazz festival</p>
                <img className="ostaliProjekti" src={p1}/>
                <p>plakat za izmišljeni festival</p>
                <p>Adobe Illustrator</p>
                <p>2020.</p>
                <div className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href= "https://drive.google.com/file/d/1X6TXj0tsfiX5biw-YoTewJI-GkicopTg/view?usp=sharing";}}>OTVORI
                </div>
            </div>

            <div className="card">
                <h3>Izložba na velesajmu</h3>
                <span className="bar"></span>
                <p className="btc">PEEK&POKE</p>
                <img className="ostaliProjekti" src={p5}/>
                <p>plakat za izmišljenu izložbu</p>
                <p>Adobe Illustrator</p>
                <p>2020.</p>
                <div className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href= "https://drive.google.com/drive/folders/1Wxg0w56tXFitXBvMexFJDKAmBT7UXjUa?usp=sharing";}}>OTVORI
                </div>
                
            </div>

            <div className="card">
                <h3>Brošura za planinarenje</h3>
                <span className="bar"></span>
                <p className="btc">Vinicunca</p>
                <img className="ostaliProjekti" src={p3}/>
                <p>planina 7 boja</p>
                <p>Adobe InDesign</p>
                <p>2022.</p>
                <div className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href= "https://drive.google.com/file/d/1kSuGrzEQun3uS7ilog6Z8C2Un2lruZ1I/view?usp=sharing";}}>OTVORI
                </div>
                
            </div>

            <div className="card">
                <h3>Grafički dizajn</h3>
                <span className="bar"></span>
                <p className="btc">Vlastiti logo</p>
                <img className="ostaliProjekti" src={p4}/>
                <p>logo iz inicijala</p>
                <p>Adobe Illustrator</p>
                <p>2022.</p>
                <div className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href= "https://drive.google.com/file/d/1N5ekWGyoxWHaZNfgBtHnrGBIEToxZflV/view?usp=sharing";}}>OTVORI
                </div>
                
            </div>

            <div className="card">
                <h3>Izrada 3D modela</h3>
                <span className="bar"></span>
                <p className="btc">Vjetrenjača</p>
                <img className="ostaliProjekti" src={p2}/>
                <p>western</p>
                <p>Blender, Substance Painter</p>
                <p>2022.</p>
                <div className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href= "https://drive.google.com/drive/folders/1n63Ci_GYyzV4vKdokdmLZqZLyYGnpFqo?usp=sharing";}}>OTVORI
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards