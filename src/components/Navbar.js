import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="align">
          Portfolio
          <img src="me.png" width="50px" height="auto" alt="myIcon" />
        </h1>
      </Link>
      <ul class={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">
            <FaHome size={30} style={{ margin: "-6px 0 0 0" }} />
          </Link>
        </li>
        <li>
          <Link to="/project">Projekti</Link>
        </li>
        <li>
          <Link to="/about">O meni</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
