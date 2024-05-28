import React from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";


const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const testimonial = [
    {
        tsImg: '/images/testimonial/img-1.jpg',
        Des: "There are many variations of passages the majority have suffered alteration some form injected humour randomise words which don't look even slightly believable are going use a passage of need to be sure.",
        Title: 'Robert William',
        Sub: "CEO & Founder",
    },
    {
        tsImg: '/images/testimonial/img-2.jpg',
        Des: "There are many variations of passages the majority have suffered alteration some form injected humour randomise words which don't look even slightly believable are going use a passage of need to be sure.",
        Title: 'Ken Williamson',
        Sub: "CEO & Founder",
    },
    {
        tsImg: '/images/testimonial/img-3.jpg',
        Des: "There are many variations of passages the majority have suffered alteration some form injected humour randomise words which don't look even slightly believable are going use a passage of need to be sure.",
        Title: 'David Miller',
        Sub: "CEO & Founder",
    },
    {
        tsImg: '/images/testimonial/img-2.jpg',
        Des: "There are many variations of passages the majority have suffered alteration some form injected humour randomise words which don't look even slightly believable are going use a passage of need to be sure.",
        Title: 'Ken Williamson',
        Sub: "CEO & Founder",
    },
]

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle MainTitle={'What People’s Say'} />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="testimonials-wrapper owl-carousel">
                            <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="testimonials-item" key={tsm}>
                                        <div className="testimonials-item-top">
                                            <p>{tesmnl.Des}</p>
                                        </div>
                                        <div className="testimonials-item-bottom">
                                            <div className="testimonials-item-bottom-author">
                                                <img src={tesmnl.tsImg} alt="" />
                                            </div>
                                            <div className="testimonials-item-bottom-author-text">
                                                <h3>{tesmnl.Title}</h3>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;