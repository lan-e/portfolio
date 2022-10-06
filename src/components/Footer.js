import "./FooterStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="email">
            <h4>
              <FaMailBulk
                size={30}
                style={{ color: "white", marginRight: "32px" }}
              />
              neladuranec@gmail.com
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={30}
                style={{ color: "white", marginRight: "32px" }}
              />
              097/723-8354
            </h4>
          </div>
          <div className="location">
            <FaHome size={30} style={{ color: "white", marginRight: "32px" }} />
            <div>
              <p>Ulica 104. Brigade 3</p>
              <p>Varaždin, 42000</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11025.869278026601!2d16.31861406977539!3d46.300555800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768aacdc21cf7e3%3A0x13d2ea5be6bf9546!2sUl.%20104.%20brigade%203%2C%2042000%2C%20Vara%C5%BEdin!5e0!3m2!1shr!2shr!4v1657801450613!5m2!1shr!2shr"
            style={{ width: 400, height: 300, border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="mapa"
          ></iframe>
        </div>

        <div className="right">
          <h4>O MENI</h4>
          <p>
            Studentica sam Sveučilišta Sjever. Osim programiranja zanima me 3D
            modeliranje i izrada videoigara.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/nela-duranec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "16px" }}
              />
            </a>
            <a
              href="https://github.com/lan-e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "16px" }}
              />
            </a>
            <a
              href="https://www.facebook.com/nela.duranec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "white", marginRight: "16px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/lan.__.e/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ color: "white", marginRight: "16px" }}
              />
            </a>
          </div>
          <Link to="/contact">
            <button className="btn">Kontakt</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
