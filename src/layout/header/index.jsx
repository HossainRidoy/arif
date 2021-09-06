import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss"
import logo from "../../assets/images/logo.png"
import {goToContact} from "../../components/top-scroll"

const Header = () => {
  

  const [state, setstate] = useState(true)

  const showHide = (e, button = null) => {
    setstate(!state)
   
    console.log(button, 'button')
    !button &&  goToContact(e)
  }

  return (
    <section>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-white shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="top-logo" style={{ height: "70px" }} src={logo} alt="" />
          </Link>
          <button onClick={(e)=>showHide(e,"menubarIcon")} className="navbar-toggler" type="button" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse ${state && "d-none"}`} id="navbarNav">
            <ul className="navbar-nav font-size-20 ms-auto">
              <li className="nav-item">
                <Link onClick={(e)=>showHide(e,"home")} className="nav-link text-black" to="/" >হোম</Link>
              </li>
              <li className="nav-item ps-lg-3">
                <a onClick={(e)=>showHide(e,"about")} className="nav-link text-black" href={process.env.PUBLIC_URL + "/#about"}>আমাদের সর্ম্পক</a>
              </li>
              <li className="nav-item ps-lg-3">
                <a  onClick={(e)=>showHide(e,"services")} className="nav-link text-black" href={process.env.PUBLIC_URL + "/#services"}>সেবা</a>
              </li>
              <li className="nav-item ps-lg-3">
                <a onClick={(e)=>showHide(e,"contacts")} className="nav-link text-black"  href={process.env.PUBLIC_URL + "/#contacts"}>যোগাযোগ</a>
              </li>
              <li className="nav-item ps-lg-3">
                <Link onClick={(e)=>showHide(e,"certificate")}  className="nav-link text-black" to="/certificate">সনদ পত্র</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Header;
