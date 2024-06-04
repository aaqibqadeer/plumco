import React from 'react'

const About = (props) => {
  return (
    <section className='wpo-about-section section-padding'>
      <div className='container'>
        <div className='wpo-about-section-wrapper'>
          <div className='row align-items-top'>
            <div className='col-lg-5 col-md-12 col-12'>
              <div className='wpo-about-img'>
                <img src='/images/about.webp' alt='' />
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-12'>
              <div className='wpo-about-content'>
                <div className='wpo-section-title-s2'>
                  <h2>Your One-Stop Shop for Home Services</h2>
                </div>
                <div className='wpo-about-content-inner'>
                  <p>
                    Welcome to Smart Appliances, your trusted partner for all
                    your home maintenance, repair, and improvement needs! We
                    offer a comprehensive range of services to keep your home
                    comfortable, safe, and beautiful.
                  </p>
                  <p>
                    Whether you need a simple fix or a complete renovation, our
                    team of skilled and experienced handymen can handle it all.
                    We pride ourselves on providing high-quality workmanship at
                    competitive prices, with a focus on customer satisfaction.
                  </p>
                  <p>Here's a glimpse of the services we offer:</p>
                  <div className='about__list'>
                    <h3>Home Maintenance & Repair:</h3>
                    <ul>
                      <li className='service-item'>
                        General Repairs: We fix leaky faucets, replace light
                        fixtures, repair drywall, install shelves, and much
                        more. We're here for all those small, yet essential
                        tasks that make your home function smoothly.
                      </li>
                      <li className='service-item'>
                        Exterior Maintenance: From power washing your siding and
                        decks to clearing clogged gutters, we keep your home's
                        exterior looking its best and protected from the
                        elements.
                      </li>
                      <li className='service-item'>
                        Interior Maintenance: We can help with painting,
                        flooring replacement, installing window treatments, and
                        more. We'll make your home a comfortable and inviting
                        space.
                      </li>
                    </ul>
                  </div>
                  <div className='about__list'>
                    <h3>Home Systems & Appliances:</h3>
                    <ul>
                      <li className='service-item'>
                        Plumbing: We diagnose and repair plumbing problems,
                        install new fixtures, and keep your drains flowing
                        freely.
                      </li>
                      <li className='service-item'>
                        HVAC: We ensure your HVAC system is running efficiently,
                        cleaning and maintaining your air conditioners and
                        furnaces, and replacing filters. We also help with
                        installations if needed.
                      </li>
                      <li className='service-item'>
                        Electrical: We tackle all your electrical needs, from
                        installing new outlets to troubleshooting electrical
                        problems.
                      </li>
                      <li className='service-item'>
                        Appliance Repair: We're experts at fixing your
                        appliances, from refrigerators to ovens, keeping them
                        running smoothly and saving you from unnecessary
                        replacements.
                      </li>
                    </ul>
                  </div>
                  <div className='about__list'>
                    <h3>Other Services:</h3>
                    <ul>
                      <li className='service-item'>
                        Landscaping: We maintain your outdoor space, mowing
                        lawns, trimming hedges, and planting flowers to create a
                        beautiful and inviting environment.
                      </li>
                      <li className='service-item'>
                        Cleaning: We offer various cleaning services, including
                        deep cleaning, window cleaning, and carpet cleaning,
                        leaving your home sparkling clean.
                      </li>
                      <li className='service-item'>
                        Home Improvement: We handle a wide range of home
                        improvement projects, from building decks to installing
                        cabinets. We're here to help you create the home of your
                        dreams.
                      </li>
                    </ul>
                  </div>
                  <div className='about__list why-choose-us'>
                    <h3>Why Choose Us?:</h3>
                    <ul>
                      <li className='service-item'>
                        Experienced and Skilled Handymen: Our team is comprised
                        of highly skilled and experienced professionals who are
                        equipped to handle any task.
                      </li>
                      <li className='service-item'>
                        High-Quality Workmanship: We prioritize quality in every
                        project, using only the best materials and techniques.
                      </li>
                      <li className='service-item'>
                        Competitive Prices: We offer fair and transparent
                        pricing, so you know exactly what to expect.
                      </li>
                      <li className='service-item'>
                        Excellent Customer Service: We are committed to
                        providing exceptional customer service and ensuring your
                        satisfaction.
                      </li>
                    </ul>
                  </div>

                  <h3 className='mt-5'>Ready to get started?</h3>
                  <p>
                    Contact us today for a free consultation and let us help you
                    tackle your home projects!
                  </p>

                  {/* <div className='signeture'>
                    <h4>Brubaker Nilka</h4>
                    <p>Vertex Chambers, CEO</p>
                    <span>
                      <img src='/images/signeture.png' alt='' />
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
