import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}

       




          <span style={{ color: darkMode ? "white" : "white" }}>Hy! I Am</span>
     <h3 className="animate-charcter">Muhammad Fahad Butt</h3>
           <span style={{fontWeight:'bold',color:"cyan"}}>



     <span class="title-word title-word-1">Junior  Frontend INTERN</span>
    <span class="title-word title-word-2"> with</span>
    <span class="title-word title-word-3"> 3 Months experience</span>
    <span class="title-word title-word-4"> html css bootstrap </span>
  

          </span>
        </div>
        <a href="https://wa.me/+923005324792" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </a>
         {/* <div className="i-icons">
        <a
                  className="nav-link text-light"
                  href="https://github.com/Fahadbutt"
                > <img src={Github} alt="" /></a>
           <a
                  className="nav-link text-light"
                  href="https://www.linkedin.com/in/Fahad-butt-837200162/"
                > <img src={LinkedIn} alt="" /></a>
          
          <a
                  className="nav-link text-light"
                  href="https://www.instagram.com/Fahadbutt58/"
                >   <img src={Instagram} alt="" /></a>
        
        </div> */}
      </div>
       <div className="i-right crwn1">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* <img src={boy} alt="" /> */}
         <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div crwn"
        >
          <FloatinDiv  img={crown} text1="FRONTEND" text2="INTERN" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Bootstrap" text2="html/css"  />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
