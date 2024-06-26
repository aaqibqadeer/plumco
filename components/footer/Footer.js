import React from 'react'
import Link from 'next/link'
import Projects from '../../api/project'
import { Services, strings } from '../../data/strings'

const ClickHandler = () => {
  window.scrollTo(10, 0)
}
const SubmitHandler = (e) => {
  e.preventDefault()
}

const Footer = (props) => {
  return (
    <footer className='wpo-site-footer'>
      <div className='wpo-upper-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col col-lg-3 col-md-12 col-sm-12 col-12'>
              <div className='widget about-widget'>
                <div className='logo widget-title'>
                  <img
                    src='/images/logo.png'
                    className='logo-img-footer'
                    alt='blog'
                  />
                </div>
                {/* <p>
                  Management Plumbing includes a broad range of activities, and
                  the many firms and their members often define these practices.
                </p> */}
                {/* <ul>
                  <li>
                    <Link onClick={ClickHandler} href='/'>
                      <i className='ti-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href='/'>
                      <i className='ti-twitter-alt'></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href='/'>
                      <i className='ti-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href='/'>
                      <i className='ti-google'></i>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className='col col-lg-3 col-md-12 col-sm-12 col-12'>
              <div className='widget wpo-service-link-widget'>
                <div className='widget-title'>
                  <h3>Contact </h3>
                </div>
                <div className='contact-ft'>
                  <ul>
                    <li>
                      <i className='fi flaticon-location'></i>{' '}
                      {strings.location}
                    </li>
                    <li>
                      <i className='fi flaticon-phone-call'></i>{' '}
                      {strings.contact}
                    </li>
                    <li>
                      <i className='fi flaticon-send'></i>Plumco@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col col-lg-3 col-md-12 col-sm-12 col-12'>
              <div className='widget link-widget'>
                <div className='widget-title'>
                  <h3>Services </h3>
                </div>
                <ul>
                  {Services.slice(0, 5).map((service, srv) => (
                    <li key={srv}>
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
            </div>

            {/* <div className='col col-lg-3 col-md-6 col-sm-12 col-12'>
              <div className='widget instagram'>
                <div className='widget-title'>
                  <h3>Projects</h3>
                </div>
                <ul className='d-flex'>
                  {Projects.slice(0, 6).map((project, srv) => (
                    <li key={srv}>
                      <Link
                        onClick={ClickHandler}
                        href='/project/[slug]'
                        as={`/project/${project.slug}`}
                      >
                        <img src={project.pImg} alt='' />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2022 Plumco by <Link onClick={ClickHandler} href="/">wpOceans</Link>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div> */}
    </footer>
  )
}

export default Footer
