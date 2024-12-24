import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";

const Footer = () => {
   return (
      <div className="footer" id="footer">
         <div className="footer-content">
            <div className="footer-content-left">
               {/* <img src={assets.logo} alt="" /> */}
               <Link to="/">
                  {/* <img src={assets.logo} alt="" className="logo" /> */}
                  <div className="tomatologo-s2 ">
                     <IoFastFoodOutline />
                     <p className="tomatologo-s1">YUMHONEY</p>
                  </div>
               </Link>
               <p>
                  Bringing delicious meals to your doorstep, made with love and delivered fresh. Enjoy a wide variety of cuisines, crafted
                  to satisfy every craving. Your satisfaction is our priority!
               </p>

               <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
               </ul>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                  <li>+1-999-111-999</li>
                  <li>contact@yumhoney</li>
               </ul>
            </div>
         </div>
         <hr />
         <p className="footer-copyright">Copyright 2024 @YUMHONEY - All Right Reserved.</p>
      </div>
   );
};

export default Footer;
