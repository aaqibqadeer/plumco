import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import { strings } from '../../data/strings'

const Contactpage = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message_html: message,
      to_email: 'your_email@example.com', // Replace with your email address
    }

    emailjs
      .send(
        'service_id', // Replace with your ServiceID
        'template_id', // Replace with your TemplateID
        templateParams,
        'your_public_key', // Replace with your PublicKey
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setName('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Failed to send email:', error)
      })
  }

  return (
    <section className='wpo-contact-pg-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col col-lg-10 offset-lg-1'>
            <div className='office-info'>
              <div className='row'>
                <div className='col col-xl-4 col-lg-6 col-md-6 col-12'>
                  <div className='office-info-item'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='fi flaticon-placeholder'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>Address</h2>
                      <p>{strings.location}</p>
                    </div>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-6 col-md-6 col-12'>
                  <div className='office-info-item'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='fi flaticon-email'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>Email Us</h2>
                      <p>Plumco@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-6 col-md-6 col-12'>
                  <div className='office-info-item'>
                    <div className='office-info-icon'>
                      <div className='icon'>
                        <i className='fi flaticon-phone-call'></i>
                      </div>
                    </div>
                    <div className='office-info-text'>
                      <h2>Call Now</h2>
                      <p>{strings.contact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='wpo-contact-title'>
              <h2>Have Any Question?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p>
            </div>
            <div className='wpo-contact-form-area contact-form mb-5'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
                </div>
            </section> */}
    </section>
  )
}

export default Contactpage
