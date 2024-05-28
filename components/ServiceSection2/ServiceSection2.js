import React from 'react'
import Services from '../../api/service'
import Link from 'next/link'


const ServiceSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (


        <section className={`wpo-service-section-s2 section-padding ${props.sClass}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Best Service We Offer</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been
                                the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.map((service, sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-img">
                                    <img src={service.sIcon} alt=""/>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.sTitle}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                                <div className="visible-icon">
                                    <img src={service.sIcon} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection2;