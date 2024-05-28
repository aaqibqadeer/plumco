import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/hero2/hero2';
import Features from '../../components/Features/Features';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import FunFact2 from '../../components/FunFact2/FunFact2';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Appointment from '../../components/Appointment/Appointment';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';



const HomePage2 = (props) => {

    return (
        <div>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <Hero2 />
            <Features fClass={'wpo-features-section-s2'}/>
            <ServiceSection2 />
            <FunFact2 />
            <ProjectSection />
            <TeamSection />
            <Appointment />
            <Testimonial />
            <BlogSection />
            <Footer />
            <Scrollbar/>
        </div>
    )
};
export default HomePage2;