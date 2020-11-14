import React, { Component } from 'react';
import Card from './card'
import { Container,Col,Row} from 'react-bootstrap';
import image1 from '../pics/watch3.webp'
import image2 from '../pics/iphoneXS.webp'
import image3 from '../pics/watch.webp'
import image4 from '../pics/watch 2.webp'
import image5 from '../pics/iphone.jpg'
import image6 from '../pics/pump.webp'
import image7 from '../pics/car.webp'
import image8 from '../pics/car1.jpg'
import image9 from '../pics/bed.webp'
import image10 from '../pics/sherwani.webp'
import image11 from '../pics/wheelchair.webp'
import image12 from '../pics/washing.webp'
import image13 from '../pics/panel.webp'
import image14 from '../pics/office chair.webp'
import image15 from '../pics/tv.webp'
import image16 from '../pics/evo.webp'
import map from '../pics/map.PNG'
import {Link } from "react-router-dom";

class AllCard extends React.Component{
    render(){
        return(
            <Container>    
                    <h3>Fresh recommendations</h3>    
            <Row class="card" >


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"RARE OVAL RADO AUTOMATIC MENS",
                         price:"RS: 38,000",
                         sellerName:"Malik Shahzaib",
                         src1:image1,
                         src2:map,
                         address:"DHA phase 2, Karachi"
               }
            }} className="link">
            <Card src={image1} name="RARE OVAL RADO AUTOMATIC MENS... " price="RS: 38,000" address="DHA phase 2, Karachi"/>
            </Link>
            </Col>


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"IPHONE 5S",
                         price:"RS: 10,000",
                         sellerName:"Jamal Shah",
                         src2:map,
                         src1:image2,
                         address:"PESHAWAR, KHYBER PAKHTUNKHWA"
               }
            }} className="link">
            <Card src={image2} name="IPHONE 5S IN GOOD CONDITION... " price="RS: 10,000" address="PESHAWAR, KHYBER PAKHTUNKHWA"/>
            </Link>
            </Col>   


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"RARE RADO BLACK DIAL NCC101 AUTOMATIC WATCH",
                         price:"RS: 25,000",
                         sellerName:"Fazil khan",
                         src2:map,
                         src1:image3,
                         address:"Lahore, Mall road"
               }
            }} className="link">
            <Card src={image3} name="RARE RADO BLACK DIAL NCC101 AUT..." price="RS: 25,000" address="Lahore, Mall road"/>
            </Link>
            </Col>  


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"BLUE BEAUTY,RADO AUTOMATIC WATCH",
                         price:"RS: 25,000",
                         sellerName:"Ali Rehman",
                         src2:map,
                         src1:image4,
                         address:"Karachi, sadar bazar"
               }
            }} className="link">
            <Card src={image4} name="BLUE BEAUTY,RADO AUTOMATIC GEN..." price="RS: 25,000" address="Karachi, sadar bazar"/>
            </Link>
            </Col> 


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"IPHONE XS",
                         price:"RS: 70,000",
                         sellerName:"Faisal Qureshi",
                         src2:map,
                         src:image5,
                         address:"Quetta, Saryab road"
               }
            }} className="link">
            <Card src={image5} name="IPHONE XS IN GOOD CONDITION... " price="RS: 70,000" address="Quetta, Saryab road"/>
            </Link>
            </Col>      


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Mud Pump severage Pump",
                         price:"RS: 9,999",
                         sellerName:"test",
                         src2:map,
                         src1:image6,
                         address:"Sialkot, jammu road"
               }
            }} className="link">
            <Card src={image6} name="Mud Pump severage Pump" price="RS: 9,999" address="Sialkot, jammu road"/>
            </Link>
            </Col>


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Corolla Gli Auto 2018",
                         price:"RS: 2,985,000",
                         sellerName:"Salim Malik",
                         src2:map,
                         src1:image7,
                         address:"Lahore, Model Town"
               }
            }} className="link">
            <Card src={image7} name="Corolla Gli Auto 2018 In Brand New..." price="RS: 2,985,000" address="Lahore, Model Town"/>
            </Link>
            </Col>   


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Suzuki Mehran 2009",
                         price:"RS: 3,50,000",
                         sellerName:"Aslam Khan",
                         src2:map,
                         src1:image8,
                         address:"Karachi, New karachi"
               }
            }} className="link">
            <Card src={image8} name="Suzuki Mehran 2009 In Excellent con...." price="RS: 3,50000" address="Karachi, New karachi"/>
            </Link>
            </Col>     


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Full Cushion Double Bed King Size",
                         price:"RS: 20,000",
                         sellerName:"Haris Ali",
                         src2:map,
                         src1:image9,
                         address:"Karachi, Old Airport"
               }
            }}className="link">
            <Card src={image9} name="Full Cushion Double Bed King Size...." price="RS: 20,000" address="Karachi, Old Airport"/>
            </Link>
            </Col>   


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Sherwani for Groom",
                         price:"RS: 5,000",
                         sellerName:"Shahid Jamal",
                         src2:map,
                         src1:image10,
                         address:"PESHAWAR, KHYBER PAKHTUNKHWA"
               }
            }}className="link">
            <Card src={image10} name="Sherwani for Groom" price="RS: 5,000" address="PESHAWAR, KHYBER PAKHTUNKHWA"/>
            </Link>
            </Col> 


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Wheelchair",
                         price:"RS: 9,850",
                         sellerName:"Ajmal Saeed",
                         src2:map,
                         src1:image11,
                         address:"Multan, Dha Road"
               }
            }}className="link">  
            <Card src={image11} name="Wheelchair" price="RS: 9,850" address="Multan, Dha Road"/>
            </Link>
            </Col>  


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Super Asia washing machine",
                         price:"RS: 16,000",
                         sellerName:"Faiz Haroon",
                         src2:map,
                         src1:image12,
                         address:"Karachi, Baharia Town"
               }
            }}className="link">  
            <Card src={image12} name="Super Asia washing machine just new" price="RS: 16,000" address="Karachi, Baharia Town"/>
            </Link>
            </Col>   


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"4 Kw Solar System",
                         price:"RS: 3,90,000",
                         sellerName:"Mukesh Kumar",
                         src2:map,
                         src1:image13,
                         address:"Hyderabad, Bombay road"
               }
            }}className="link">  
            <Card src={image13} name="4 Kw Solar System" price="RS: 390,000" address="Hyderabad, Bombay road"/>
            </Link>
            </Col> 


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Used Office Chair",
                         price:"RS: 4,000",
                         sellerName:"Kashif Ali",
                         src2:map,
                         src1:image14,
                         address:"PESHAWAR, KHYBER PAKHTUNKHWA"
               }
            }}className="link">   
            <Card src={image14} name="Used Office Chair" price="RS: 4,000" address="PESHAWAR, KHYBER PAKHTUNKHWA"/>
            </Link>
            </Col>   


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"32inch TV simple",
                         price:"RS: 17,000",
                         sellerName:"Haider Abbas",
                         src2:map,
                         src1:image15,
                         address:"Lahore, Model Town"
               }
            }}className="link">   
            <Card src={image15} name="32inch TV simple (made in china)" price="RS: 17,000" address="Lahore, Model Town"/>
            </Link>
            </Col> 


            <Col sm={12} md={3} lg={3} >
            <Link to={{
               pathname: '/productdetails',
               aboutProps:{
                         name:"Device evo",
                         price:"RS: 600",
                         sellerName:"Ismail Soomro",
                         src2:map,
                         src1:image16,
                         address:"PESHAWAR, KHYBER PAKHTUNKHWA"
               }
            }}className="link">   
            <Card src={image16} name="Device evo" price="RS: 600" address="PESHAWAR, KHYBER PAKHTUNKHWA"/>
            </Link>
            </Col>                                                                                                                                                                        
            </Row>
          </Container>
       )
    }
}
export default AllCard;