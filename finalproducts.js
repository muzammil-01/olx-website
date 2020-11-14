import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import Details from './productdetails'

const Product = (props) =>{
    return(
        <div>
            <Header/>
            <Details name={props.location.aboutProps.name} price={props.location.aboutProps.price} 
            sellerName={props.location.aboutProps.sellerName} src1={props.location.aboutProps.src1}
            src2={props.location.aboutProps.src2} address={props.location.aboutProps.address}
            />
            <Footer/>
        </div>
    )
}
export default Product;