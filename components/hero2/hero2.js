import React from "react";
import Slider from "react-slick";
import Link from 'next/link'


const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true
};

const Hero2 = () => {
    return (
        <section className="wpo-hero-slider">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                                <div className="gradient-overlay"></div>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>Expert Plumbing Service You Can Trust.</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/appointment" className="theme-btn">Book Online</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                                <div className="gradient-overlay"></div>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>Expert Plumbing Service You Can Trust.</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/appointment" className="theme-btn">Book Online</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero2;