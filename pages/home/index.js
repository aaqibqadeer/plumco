import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Features from '../../components/Features/Features';
import WorkSection from '../../components/WorkSection/WorkSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Appointment from '../../components/Appointment/Appointment';
import Footer from '../../components/footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';



const HomePage = (props) => {

    return (
        <div>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={'/images/logo.png'} />
            <Hero />
            <Features />
            <WorkSection />
            <ServiceSection />
            <FunFact />
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
export default HomePage;