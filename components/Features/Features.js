import React from 'react';

const Features = (props) => {

    return (
        <section className={`wpo-features-section ${props.fClass}`}>
            <div className="container">
                <div className="wpo-features-wrap">
                    <div className="row align-items-center justify-content-between">
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src='/images/icon/calendar.svg' alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Book Online</h4>
                                </div>
                            </div>
                            <div className="angle"><img src='/images/icon/6.png' alt=""/></div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item active">
                                <div className="wpo-features-icon">
                                    <img src='/images/icon/express-delivery.svg' alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4>We Arrive</h4>
                                </div>
                            </div>
                            <div className="angle"><img src='/images/icon/6.png' alt=""/></div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src='/images/icon/prototype.svg' alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Solve Problem</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Features;
