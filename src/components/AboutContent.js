import "./AboutContentStyles.css";

import React from "react";
import me from "../assets/ja1.jpg";
/*import body from "../assets/body.png";
import react from "../assets/ReactJS.png";*/

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Nela Đuranec</h1>
        <p>
          Studentica sam Sveučilišta Sjever. Fokusiram se na programiranje, osim
          toga zanima me 3D modeliranje i izrada videoigara. Imam iskustva s
          radom u Adobe programima - InDesign, Illustrator, Photoshop i ostalim
          programima - Blender, DaVinci Resolve, Sony Vegas.
        </p>
        <p>
          Zanima me frontend developing. Znam osnove HTML, CSS i JS te React
          pomoću kojeg je napravljen ovaj Portfolio. U posljednjem projektu
          koristila sam Sanity, Stripe i Netlify.
        </p>
        <p>Osobine: marljivost, perfekcionizam, organiziranost, timski rad.</p>
      </div>

      <div className="right">
        <img src={me} className="img" alt="me" />
        {/*<div className="img-container">
          <div className="img-stack top">
            <img src={body} className="img" alt="body" />
          </div>
          <div className="img-stack bottom">
            <img src={react} className="img" alt="react" />
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default AboutContent;
