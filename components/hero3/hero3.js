import React from "react";
import Link from 'next/link'
import VideoModal from '../ModalVideo/VideoModal'

const Hero3 = () => {
    return (
        <section className="wpo-hero-section-2">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-5 col-lg-5 offset-lg-7 col-12">
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
                                        <Link href="/appointment" className="theme-btn">Book Online</Link>
                                    </li>
                                    <li>
                                        <div className="video-holder">
                                            <VideoModal />
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
                </div>
            </div>
        </section>
    )
}



export default Hero3;