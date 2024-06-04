import React from 'react'
import Link from 'next/link'
import { Services } from '../../../data/strings'

const ServiceSidebar = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault()
  }

  const ClickHandler = () => {
    window.scrollTo(10, 0)
  }

  return (
    <div className='col-lg-4 col-md-8'>
      <div className='blog-sidebar'>
        {/* <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
        <div className='widget category-widget'>
          <h3>Post Categories</h3>
          <ul>
            {Services.map((service, Sitem) => (
              <li key={Sitem}>
                <Link
                  onClick={ClickHandler}
                  href='/service/[slug]'
                  as={`/service/${service.slug}`}
                >
                  {service.sTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='wpo-contact-widget widget'>
          <h2>
            How We Can <br /> Help You!
          </h2>
          <p> Contact us to find out more or book an appointment </p>
          <Link href='/contact'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceSidebar
