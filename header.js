import React, { Component } from 'react';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { GoSearch } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import {  AiOutlineDown } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import image1 from '../pics/PointChat.webp'
import image2 from '../pics/PointFavorite.webp'
import image3 from '../pics/PointPost.webp'
import { RiFacebookCircleLine} from "react-icons/ri";
import {RiGoogleLine} from "react-icons/ri"
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
  apiKey: "AIzaSyDoYh-RVQjMxQ7MQbPrT7_e4GWFbOkEogg",
  authDomain: "authentication-b046d.firebaseapp.com"
})


class Header extends Component{ 

// -------------Firebase Authentication----------



  state = { isSignedIn: false }
  uiConfig = {
  signInFlow: "popup",
  signInOptions: [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
  signInSuccess: () => false
  }
  }

  componentDidMount = () => {
  firebase.auth().onAuthStateChanged(user => {
  this.setState({ isSignedIn: !!user })
  console.log("user", user)
  })
  }


  
    render(){
      return(
        //------------------------ first header--------------------------     
  <div>
    
    <div className="row hello">
      <div className="col-1">
        <img src="https://tiptapp.com/img/logo/olx-logo-charcoal.png" width="40px" className="logo" />
      </div>
      <div className="col-3">
      <div className="down">
  <span><AiOutlineSearch/></span>  
  <label>Pakistan</label>
<div className="btn-group align">
  <button type="button" className="btn " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <AiOutlineDown/>
  </button>
  <div className="dropdown-menu page dropdown-menu-right">
    <p className="side">Recent locations</p>
    <a className="dropdown-item" href="#"><HiOutlineLocationMarker className="big"/>Hyderabad</a>
    <a className="dropdown-item" href="#"><HiOutlineLocationMarker className="big"/>Sindh</a>
    <div className="dropdown-divider" />
    <p className="side">Popular locations</p>
    <a className="dropdown-item" href="#"> <HiOutlineLocationMarker className="big"/>Sindh</a>
    <a className="dropdown-item" href="#"><HiOutlineLocationMarker className="big"/>Punjab</a>
    <a className="dropdown-item" href="#"><HiOutlineLocationMarker className="big"/>Islamabad Capital Territory</a>
    <a className="dropdown-item" href="#"><HiOutlineLocationMarker className="big"/>Khyber Pakhtunkhwa</a>
  </div>
</div>
</div>
</div>
      <div className="col-6">
      <InputGroup size="sm" className="mb-3">
    <FormControl aria-label="Small" placeholder="Find Cars, Mobile Phones and more....." aria-describedby="inputGroup-sizing-sm" className="height"/>
    <InputGroup.Prepend>
      <InputGroup.Text className="search" id="inputGroup-sizing-sm"><GoSearch className="invert"/></InputGroup.Text>
    </InputGroup.Prepend>
  </InputGroup>
      </div>

      {/*------------ Login button---------- */}
      <div className="col-2 mt-1">
      <a href className="log" data-target="#mymodel" data-toggle="modal">Login</a>
      <div className="modal" tabIndex={-1} id="mymodel">
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
      </button>
      </div>

      <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-item active">
      <center><img src={image1} className="d-block test1" /></center>
      <center><p>Help make OLX safer place to buy and sell</p></center>
      </div>
      <div className="carousel-item">
      <center><img src={image2} className="d-block test1"  /></center>
      <center><p>Help make OLX safer place to buy and sell</p></center>
      </div>
      <div className="carousel-item">
      <center><img src={image3} className="d-block  test1" /></center>
      <center><p>Help make OLX safer place to buy and sell</p></center>
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      </a>
      <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon dark" aria-hidden="true" />
      </a>
      </div>
      </div>

      <div className="modal-body">

         {/* --------firebase authentication-------------- */}

      {this.state.isSignedIn ? (
      <span>
      <div>Signed In!</div>
      <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      <img
      alt="profile picture"
      src={firebase.auth().currentUser.photoURL}
      />
      </span>
      ) : (
      <StyledFirebaseAuth
      uiConfig={this.uiConfig}
      firebaseAuth={firebase.auth()}
      />
      )}
      <br/>
      <center><small>we won't share your personal details with anyone</small></center>
      <br/>
      <center><small>If you continue, you are accepting <a href="#" className="deco">OLX Terms and Conditions and Privacy Policy</a></small></center>
      </div>
      </div>
      </div>
      </div>      

        {/* ----------sell button------------ */}

        
      <button className="sell" data-target="#mymodel" data-toggle="modal">+Sell</button>


      <div className="modal" tabIndex={-1} id="mymodel">
      <div className="modal-dialog">
      <div className="modal-content">


      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
      </button>
      </div>

      <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-item active">
      <center><img src={image1} className="d-block test1" /></center>
      <center><p>Help make OLX safer place to buy and sell</p></center>
      </div>
      <div className="carousel-item">
      <center><img src={image2} className="d-block test1"  /></center>
      <center><p>Help make OLX safer place to buy and sell</p></center>
      </div>
      <div className="carousel-item">
      <center><img src={image3} className="d-block  test1" /></center>
      <center><p>Help make OLX safer place to buy and sell</p></center>
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      </a>
      <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon dark" aria-hidden="true" />
      </a>
      </div>
      </div>

      <div className="modal-body">
      {this.state.isSignedIn ? (
      <span>
      <div>Signed In!</div>
      <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      <img
      alt="profile picture"
      src={firebase.auth().currentUser.photoURL}
      />
      </span>
      ) : (
      <StyledFirebaseAuth
      uiConfig={this.uiConfig}
      firebaseAuth={firebase.auth()}
      />
      )}
      <br/>
      <center><small>we won't share your personal details with anyone</small></center>
      <br/>
      <center><small>If you continue, you are accepting <a href="#" className="deco">OLX Terms and Conditions and Privacy Policy</a></small></center>

      </div>
      </div>
      </div>
      </div>

      </div>
      </div>
  


{/* --------------------after header------------------ */}

      <div className="border w-100">
      <ul className="nav nav-pills">
      <li>
      <Dropdown>
      <Dropdown.Toggle className="non">
      All Categories
      </Dropdown.Toggle>
      <Dropdown.Menu className="pop">
      <Dropdown.Item >
      <Row>
      <Col className="line">
      <a href="#"><b>Vehicles</b></a>
      <br />
      <a href="#"> Tractors &amp; Trailers</a>
      <br />
      <a href="#"> Boats</a>
      <br />
      <a href="#"> Other Vehicles</a>
      <br />
      <a href="#"> Rickshaw &amp; Chingchi</a>
      <br />
      <a href="#">Buses, Vans &amp; Trucks </a>
      <br />
      <a href="#">Spare Parts </a>
      <br />
      <a href="#">Cars Accessories</a>
      <br />
      <a href="#"> Cars on Installments</a>
      <br />
      <a href="#"> Cars</a>  
      <br />
      <br />
      <a href="#"><b>Mobiles</b></a>
      <br />
      <a href="#"> Mobile Phones</a>
      <br />
      <a href="#"> Accessories</a>
      <br />
      <a href="#"> Tablets</a>
      <br />
      <br />
      <a href="#"><b>Electronics &amp; Home Appliances</b></a>
      <br />
      <a href="#"> Washing Machines &amp; Dryers</a>
      <br />
      <a href="#"> Fridges &amp; Freezers</a>
      </Col>
      <Col className="line">
      <a href="#"><b>Animals</b></a>
      <br />
      <a href="#"> Other Animals</a>
      <br />
      <a href="#"> Pet Food &amp; Accessories</a>
      <br />
      <a href="#"> Horses</a>
      <br />
      <a href="#"> Livestock</a>
      <br />
      <a href="#">Dogs </a>
      <br />
      <a href="#">Cats </a>
      <br />
      <a href="#">Hens &amp; Aseel</a>
      <br />
      <a href="#"> Birds</a>
      <br />
      <a href="#">  Fish &amp; Aquariums</a>
      <br />
      <br />
      <a href="#"><b>Furniture &amp; Home Decor</b></a>
      <br />
      <a href="#"> other Household items</a>
      <br />
      <a href="#"> Office Furniture</a>
      <br />
      <a href="#"> Curtains &amp; Blinds</a>
      <br />
      <a href="#"> Rugs &amp; Carpets</a>
      <br />
      <a href="#">Painting &amp; Mirrors</a>
      <br />
      <a href="#">Garden &amp; Outdoor</a>
      <br />
      <a href="#">Tables &amp; Dining</a>
      </Col>
      <Col className="line">
      <a href="#"> <b>Fashion &amp; Beauty</b></a>
      <br />
      <a href="#"> Other Fashion</a>
      <br />
      <a href="#">Couture</a>
      <br />
      <a href="#">Lawn &amp; Pret</a>
      <br />
      <a href="#"> Wedding</a>
      <br />
      <a href="#">Watches</a>
      <br />
      <a href="#"> Skin &amp; Hair</a>
      <br />
      <a href="#">Make Up</a>
      <br />
      <a href="#"> Jewellery</a>
      <br />
      <a href="#">Footwear</a>
      <br />
      <a href="#">Clothes</a>
      <br />
      <a href="#"> Accessories</a>
      <br />
      <br />
      <a href="#"><b>Property for Rent</b></a>
      <br />
      <a href="#">Land &amp; Plots </a>
      <br />
      <a href="#">Vacation Rentals - Guest Houses </a>
      <br />
      <a href="#">Roommates &amp; Paying Guests </a>
      <br />
      <a href="#"> Rooms</a>
      </Col>
      <Col className="line">
      <a href="#"> <b>Services</b></a>
      <br />
      <a href="#">  Farm &amp; Fresh Food</a>
      <br />
      <a href="#"> Catering &amp; Restaurant</a>
      <br />
      <a href="#"> Home &amp; Office Repair</a>
      <br />
      <a href="#"> Movers &amp; Packers</a>
      <br />
      <a href="#"> Maids &amp; Domestic Help</a>
      <br />
      <a href="#"> Health &amp; Beauty</a>
      <br />
      <a href="#"> Event Services</a>
      <br />
      <a href="#"> Electronics &amp; Computer Repair</a>
      <br />
      <a href="#"> Other Services</a>
      <br />
      <a href="#">Web Development</a>
      <br />
      <a href="#"> Drivers &amp; Taxi</a>
      <br />
      <a href="#"> Car Rental</a>
      <br />
      <a href="#"> Travel &amp; Visa</a>
      <br />
      <a href="#"> Education &amp; Classes</a>
      <br />
      <br />
      <a href="#"><b>Books, Sports &amp; Hobbies</b></a>
      <br />
      <a href="#">other Hobbies</a>
      </Col>
      </Row>
      </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Mobile Phones</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Cars</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Motorcycles</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Houses</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">TV-Video-Audio</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Tablets</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">Land &amp; Plots</a>
      </li>
      </ul>
      </div>
      </div>
  
  
  
      )
    }
  }
  export default Header;
  