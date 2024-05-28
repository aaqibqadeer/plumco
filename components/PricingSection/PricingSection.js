import React from 'react'
import Link from 'next/link'



const PricingSection = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Choose Your Pricing Plan</h2>
                        </div>
                    </div>
                </div>
                <div className="pricing-grids clearfix">
                    <div className="grid">
                        <div className="type">
                            <h5>Basic</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">$50</h3>
                                <p>Per Month</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Basement Plumbing</li>
                                <li>Bathroom Plumbing</li>
                                <li>Water Line Repair</li>
                                <li>Gas Line Services</li>
                                <li>Kitchen Plumbing</li>
                            </ul>
                            <Link href="/pricing" className="get-started">Get Started</Link>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>ULTRA</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">$68</h3>
                                <p>Per Month</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Basement Plumbing</li>
                                <li>Bathroom Plumbing</li>
                                <li>Remodeling Service</li>
                                <li>Water Line Repair</li>
                                <li>Gas Line Services</li>
                                <li>Kitchen Plumbing</li>
                            </ul>
                            <Link href="/pricing" className="get-started">Get Started</Link>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>Pro</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">$75</h3>
                                <p>Per Month</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Basement Plumbing</li>
                                <li>Bathroom Plumbing</li>
                                <li>Water Line Repair</li>
                                <li>Gas Line Services</li>
                                <li>Kitchen Plumbing</li>
                            </ul>
                            <Link href="/pricing" className="get-started">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection;