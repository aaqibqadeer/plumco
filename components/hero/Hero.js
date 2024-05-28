import React from "react";
import Link from 'next/link'
import VideoModal from '../ModalVideo/VideoModal'

const Hero = () => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-4 col-lg-5 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-subtitle">
                                <span>:: Highly Trained Staff </span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Ready For <span>Help</span> You.</h2>
                            </div>
                            <div className="wpo-hero-des">
                                <p>We are certified company. We provide best plumbing services for you & your company .
                                </p>
                            </div>
                            <div className="btns">
                                <ul>
                                    <li>
                                        <Link href="/appointment" className="btn theme-btn">BOOK ONLINE</Link>
                                    </li>
                                    <li>
                                        <div className="video-holder">
                                            <VideoModal/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <div className="r-img">
                        <img src='/images/slider/right-img.png' alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;