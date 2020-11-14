import React, { Component } from 'react';
import foot from '../pics/footer olx.PNG'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import apple from '../pics/app-store.png'
import play from '../pics/play-store.png'
import {Row} from 'react-bootstrap'




class Footer extends Component{
    render(){

        return(
          
            <div>
          <div className="cont">
          <div className="row">
      <div className="col">
        <img width="100%" src={foot}/>
        </div>
        </div>
        <div className="container">
      <div className="row">
        <div className="col">
          <p style={{"font-weight":"bolder"}}>POPULAR CATEGORIES</p>
          <p>
            Cars
            <br />
            Flats for rent
            <br />
            Jobs
            <br />
            Mobile Phones
          </p>
        </div>
        <div className="col">
          <p style={{"font-weight":"bolder"}}>TRENDING SEARCHES</p>
          <p>Bikes
            <br />
            Watches
            <br />
            Books
            <br />
            Dogs
          </p>
        </div>
        <div className="col">
          <p style={{"font-weight":"bolder"}}>ABOUT US</p>
          <p>
            About OLX Group
            <br />
            OLX Blog
            <br />
            Contact Us
            <br />
            OLX for Businesses
          </p>
        </div>
        <div className="col">
          <p style={{"font-weight":"bolder"}}>OLX</p>
          <p>
            Help
            <br />
            Sitemap
            <br />
            Legal &amp; Privacy information              
          </p>
        </div>
        <div className="col">
          <p style={{"font-weight":"bolder"}}>FOLLOW US</p>
          <p>
            <FaFacebook/>
            <FaTwitter className="icons"/>
            <FaYoutube className="icons"/>
            <FaInstagram className="icons"/>
            <br/>
            <br/>
            <br/>
            <img src={apple} width="50%"/>
            <img src={play} width="50%"/> 
          </p>
        </div>
      </div>
    </div>
    </div>
    <div className="one">
    <div className="container">
      <div className="row">
        <div className="col-md-4 other">Other Countries India - South Africa - Indonesia</div>
        <div className="col-md-4 ml-auto other">.Free Classifieds in Pakistan © 2006-2020 OLX</div>
      </div>
    </div>
    </div>
    </div>
        )
    }
}
export default Footer;
