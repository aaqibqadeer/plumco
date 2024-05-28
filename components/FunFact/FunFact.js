import React from 'react'

const funFact = [
    {
        fIcon:'/images/icon/9.png',
        title: '200',
        subTitle: 'Running Project',
    },
    {
        fIcon:'/images/icon/10.png',
        title: '85+',
        subTitle: 'Team Member',
    },
    {
        fIcon:'/images/icon/11.png',
        title: '39K',
        subTitle: 'Happy Clients',
    },
    {
        fIcon:'/images/icon/12.png',
        title: '45',
        subTitle: 'Award-winning',
    },


]


const FunFact = (props) => {
    return (
        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="wpo-funfacts-text">
                            <h3>We Are Provide Always Different From Other Services.</h3>
                            <div className="customer-review">
                                <h2>89K</h2>
                                <div className="reviews">
                                    <ul>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                    </ul>
                                    <span>Customer Review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 offset-lg-1">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="icon">
                                        <img src={funfact.fIcon} alt="" />
                                    </div>
                                    <div className="info">
                                        <h3><span className="odometer" data-count="200">{funfact.title}</span></h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;