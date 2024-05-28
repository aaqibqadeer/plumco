import React, { Fragment, useEffect, useState } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import { useRouter } from 'next/router'
import PageTitle from '../../components/pagetitle/PageTitle';
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'



const ProductSinglePage = (props) => {
    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };


    const { addToCart } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.slug === router.query.slug))
    }, []);

    const item = product[0];


    return (
        <Fragment>
            <Navbar2 topbarNone={'wpo-header-style-1'}/>
            <PageTitle pageTitle={item?.title} pagesub={item?.title}/>
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCartProduct}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
