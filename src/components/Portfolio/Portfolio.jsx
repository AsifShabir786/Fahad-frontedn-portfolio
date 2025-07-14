import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import c from "../../img/c.PNG";
import restorent from "../../img/restorent.PNG";

import HOC from "../../img/hoc.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
  <>
<div className="center-text2 text-center">
  <span>Recent Projects</span>
  <br />
  <span className="text-muted text11">
    Our client projects are highly confidential and protected by login credentials. To access these exclusive insights and resources, access exclusive client projects by logging in with my test credentials. Company/Clients privacy is my priority. Thank you for your understanding and cooperation.
    <br/>
    <span class="text-muted textt" style={{textAlign: 'center', display: 'block', margin: '0 auto',marginTop:"1rem"}}>"Credentials will be provided as per requirement"</span>
  </span>
</div>


  <div className="bodys" style={{borderRadius:'50px',height:"auto"}}>
  {/* <a href='https://ottomon-bed-uk.vercel.app/beds/DoubleBeds'>

<div class="card-wrap bbbb">
<div class="card-header one" style={{ height: '200px' }}>
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1725782024/uj71by0airoukhnu8ngv.png' style={{ width: '100%', height: '100%' }} />
</div>
<div class="card-content">
  <h1 class="card-title">Ecommerce Shop in Next.js and Node Project</h1>
  <p class="card-text">Used Tailwind css,html,css3,next.js and i added
  link of project here.</p>
  <a href='https://ottomon-bed-uk.vercel.app/beds/DoubleBeds'>
    <button class="card-btn one">Click</button>
  </a>
</div>
</div></a> */}
  <a href='https://welcome.doingthistogether.com/MainScreen'>

  <div class="card-wrap bbbb">
  <div class="card-header one" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/alpja/image/upload/v1702752171/e7dslq84hzg0wdxyyvyp.png' style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">Medical Test System for Hospital in React.js Node</h1>
    <p class="card-text">Used bootstrap5,html,css3 with Bootstrap React and i added
    link of project here.</p>
    <a href='https://welcome.doingthistogether.com/MainScreen'>
      <button class="card-btn one">Click</button>
    </a>
  </div>
</div></a>
<a href='http://168.231.80.24:3002/#/'>

<div class="card-wrap">
  <div class="card-header two" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1752494366/WhatsApp_Image_2025-07-14_at_3.59.08_AM_tvzybl.jpg' alt="" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">KSA4sale is alternative of olx.com</h1>
    <p class="card-text">I used Bootstrap and next js</p>
    <a href='http://168.231.80.24:3002/#/'>
      <button class="card-btn two">Click</button>
    </a>
  </div>
</div>
</a>
 
 
 
</div>









  </>
  );
};

export default Portfolio;
