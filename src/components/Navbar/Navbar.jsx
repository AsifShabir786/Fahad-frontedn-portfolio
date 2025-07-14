import React, { useContext } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
const Navbar = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        
        <span className="n-name button i-button2">Fahad</span>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" style={{ color: darkmode ? "cyan" : "#00ffff" }} spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} style={{ color: darkmode ? "cyan" : "#00ffff" }} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} style={{ color: darkmode ? "cyan" : "#00ffff" }}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} style={{ color: darkmode ? "cyan" : "#00ffff" }}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true} style={{ color: darkmode ? "cyan" : "#00ffff" }}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <a href="https://wa.me/+923005324792" spy={true} smooth={true}>
  <button className="button n-button d-none ddd d-lg-block">Call : +92 300 5324792</button>
</a>

      </div>
    </div>
  );
};

export default Navbar;
