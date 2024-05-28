import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import VideoModal from '../ModalVideo/VideoModal';


const Appointment = () => {


    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };


    return (
        <section className="wpo-contact-section section-padding">
            <div className="wpo-contact-img">
                <img src='/images/contact.jpg' alt="" />
                <VideoModal />
            </div>
            <div className="wpo-contact-img-s2">
                <img src='/images/contact.png' alt="" />
            </div>
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <span>ONLINE BOOKING</span>
                                    <h2>Online Booking For Appointments.</h2>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="row">
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Full name here*</label>
                                                <input
                                                    className="form-control"
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Name" />
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Email here*</label>
                                                <input
                                                    className="form-control"
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your Email" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Contact number*</label>
                                                <input
                                                    className="form-control"
                                                    value={forms.phone}
                                                    type="phone"
                                                    name="phone"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Your phone" />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Select service*</label>
                                                <select className="form-control"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.subject}
                                                    type="text"
                                                    name="subject">
                                                    <option>Choose a Service</option>
                                                    <option>Kitchen plumbning</option>
                                                    <option>Gas Line Services</option>
                                                    <option>Water Line Repair</option>
                                                    <option>Bathroom Plumbing</option>
                                                    <option>Basement Plumbing</option>
                                                </select>
                                                {validator.message('subject', forms.subject, 'required|alpha_space')}
                                            </div>
                                        </div>
                                        <div className="col fullwidth col-lg-12 ">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.message}
                                                    type="text"
                                                    name="message"
                                                    placeholder="Message">
                                                </textarea>
                                                {validator.message('message', forms.message, 'required')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">GET AN APPOINMENT</button>
                                    </div>
                                </form>
                                <div className="border-style"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment;