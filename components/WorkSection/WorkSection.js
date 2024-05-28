import React from 'react'
import Link from 'next/link'
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const WorkSection = (props) => {
    return (
        <section className="wpo-work-section">
            <div className="container">
                <div className="wpo-work-wrap">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-icon">
                                    <img src='/images/icon/7.png' alt=""/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2><Link onClick={ClickHandler} href="/service">Commercial Plumbing</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-icon">
                                    <img src='/images/icon/8.png' alt=""/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2><Link onClick={ClickHandler} href="/service">Residential Plumbing</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSection;