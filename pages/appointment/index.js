import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import AppointmentS2 from '../../components/AppointmentS2/AppointmentS2';
import Footer from '../../components/footer/Footer';


const Appointment =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Appointment'} pagesub={'Appointment'}/> 
            <AppointmentS2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default Appointment;
