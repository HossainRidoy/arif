import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/slide1.jpg"
import slide2 from "../../assets/images/slide2.jpg"
import "./slide.scss"

const Slide = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <section className="" id="topSlide">
            <Slider {...settings}>
                <div className="slideItem">
                    <img style={{ width: "100%" }} className="d-block" src={slide1} alt="" />
                    <div className="slideTextMiddle container">
                        <h1 className="text-white text-center px-3 slide-text">জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের।</h1>
                    </div>
                </div>
                <div className="slideItem">
                    <img style={{ width: "100%" }} className="d-block" src={slide2} alt="" />
                    <div className="slideTextMiddle container">
                        <h1 className="text-white text-center px-3  slide-text">জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে।</h1>

                    </div>
                </div>

            </Slider>
        </section>
    )
}

export default Slide
