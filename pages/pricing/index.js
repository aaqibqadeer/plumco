import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PricingSection from '../../components/PricingSection/PricingSection'
import Footer from '../../components/footer/Footer';


const PricingPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'} />
            <PricingSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PricingPage;