import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { Services } from '../../data/strings'
import ServiceSidebar from './single/sidebar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Benefits from './single/benefits'

const SeviceSinglePage = (props) => {
  const router = useRouter()

  const serviceDetails = Services.find(
    (item) => item.slug === router.query.slug,
  )

  return (
    <Fragment>
      <Navbar />
      <PageTitle
        pageTitle={serviceDetails?.sTitle}
        pagesub={serviceDetails?.sTitle}
      />
      <div className='wpo-project-details-area wpo-service-details section-padding'>
        <div className='container'>
          <div className='row'>
            <ServiceSidebar />
            <div className='col-lg-8 order-lg-2 order-md-1 order-1'>
              <div className='wpo-minimals-wrap'>
                <div className='minimals-img'>
                  <img src={serviceDetails?.sImg} alt='' />
                </div>
              </div>
              <div className='wpo-p-details-section'>
                <h2>{`${serviceDetails?.sTitle}`}</h2>
                <p>{serviceDetails?.description}</p>
                <p>{serviceDetails?.longDescription}</p>
                {/* <div className='row'>
                  <div className='col-md-6 col-sm-6 col-12'>
                    <div className='wpo-p-details-img'>
                      <img src={serviceDetails?.ssImg1} alt='' />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6 col-12'>
                    <div className='wpo-p-details-img'>
                      <img src={serviceDetails?.ssImg2} alt='' />
                    </div>
                  </div>
                </div> */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='wpo-p-details-img'>
                      <h3>Services includes:</h3>
                      <ul className='p-3'>
                        {serviceDetails?.listOfServices.map((item) => (
                          <li key={item} className='service-list'>
                            {' '}
                            {item}{' '}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="wpo-faq-section">
                                <h4>Frequently Ask Questions</h4>
                                <Benefits />
                            </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  )
}
export default SeviceSinglePage
