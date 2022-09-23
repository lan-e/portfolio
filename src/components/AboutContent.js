import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

import body from "../assets/body.png"
import react from "../assets/ReactJS.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Nela Đuranec</h1>
            <p>Studentica sam Sveučilišta Sjever. Fokusiram se na programiranje, no osim toga zanima me 3D modeliranje, izrada videoigara i fotografija.</p>
            <p>Zanima me frontend developing. Znam osnove HTML, CSS i JS te React pomoću kojeg je napravljen ovaj Portfolio.</p>
            <Link to="/contact">
                <button className="btn">Kontakt</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={body} className="img" alt="body"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react} className="img" alt="react"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent