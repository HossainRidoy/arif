import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.scss"
import facebook from "../../assets/icon/facebook.svg"
import twitter from "../../assets/icon/twitter.svg"
import youtube from "../../assets/icon/youtube.svg"
import logo from "../../assets/images/logo.png"


const Fotter = () => {
    return (
        <section className="bg-black pt-5 pb-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-9">
                        <nav className="d-sm-flex">
                            <Link to="/" className="text-decoration-none text-white font-size-40 text-center d-block">
                                <img className="footer-logo" style={{height:"60px"}} src={logo} alt="" />
                            </Link>
                            <ul className="list-unstyled m-0 font-size-20 text-center d-sm-flex align-items-sm-center">
                                <li className="ms-sm-4 ms-lg-5 py-2 mb-sm-0"><Link to="/" className="text-decoration-none text-white" >হোম</Link></li>
                                <li className="ms-sm-4 ms-lg-5 py-2 mb-sm-0"><a href="#about" className="text-decoration-none text-white" >আমাদের সর্ম্পক</a></li>
                                <li className="ms-sm-4 ms-lg-5 py-2 mb-sm-0"><a href="#services" className="text-decoration-none text-white" >সার্ভিস</a></li>
                                <li className="ms-sm-4 ms-lg-5 py-2 mb-sm-0"><a href="#contacts" className="text-decoration-none text-white" >যোগাযোগ</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 col-sm-3">
                        <div className="d-flex justify-content-center justify-content-lg-end mt-4 mt-sm-0">
                            <a href="https://www.facebook.com" target="_blank" className="socil-icon">
                                <img className="" style={{ width: "20px", height: "20px" }} src={facebook} alt="" />
                                <span className="icon-text">Facebook</span>
                            </a>
                            <a href="https://twitter.com/?lang=en" target="_blank" className="socil-icon">
                                <img className="" style={{ width: "20px", height: "20px" }} src={twitter} alt="" />
                                <span className="icon-text">Twitter</span>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" className="socil-icon">
                                <img className="" style={{ width: "20px", height: "20px" }} src={youtube} alt="" />
                                <span className=" icon-text">Youtube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <p className="text-center text-white">
                    Copyright @ Beatnik 2021. All rights reserved
                </p>
            </div>
        </section>
    );
};
export default Fotter;