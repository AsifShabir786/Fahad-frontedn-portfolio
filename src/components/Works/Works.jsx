import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "white" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane style={{background:"cyan"}}>
I am Junior Bootstrap React INTERN with 3 + Month experience              <br />
           I works as Junior FRONTEND INTERN at AlRightTech,Rawalpindi
             
            <br />
            {/* Also works as node js INTERN as Freelancer */}
            <br />
            FRONTEND INTERN
          </spane>
          <Link to="'https://wa.me/+923005324792'" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s'} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={'https://camo.githubusercontent.com/54d64f1260052c96ce70c540bd64ee83edbe865aa765941bbc012821744fe265/68747470733a2f2f6173736574732e7a6569742e636f2f696d6167652f75706c6f61642f76313533383336313039312f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6a732e706e67'} alt="" />
          </div>
          <div className="">
            <img alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ktLx11LIB8SVdDFdpmalA3NTJXgd2MqwohJt7yiu7g&s'} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMRs58hmAkTEaN5AMpXvhgc43KMzQxrXEr9RcrDOSUA&s'} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
