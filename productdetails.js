import React, { Component } from "react";
import { Container,Col,Row,Card} from 'react-bootstrap';
import user from '../pics/user.jpg'
import Header from '../component/header'
import Footer from '../component/footer'

class Details extends Component{
    render(){
       return(
            <div>
  
  <Container>            
  <Row>                       
  <Col sm={12} md={6} lg={7}>
  
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={this.props.src1} className=" image-size"  alt="..." />
    </div>
  </div>
</div>


<Card className="test">
  <Card.Body>
  <h5>Details</h5>
  <br/>
  <table>
      <tr>condition</tr>
      <tr className="pad">Used</tr>
  </table>
 
  <div className="khan"></div>
  <br/>
  <h5>Description</h5>
  <p>
  some dummy text to check whether it is working  or not 
  </p>
  </Card.Body>
  </Card>

  </Col>


  <Col sm={12} md={6} lg={5}>                     
  <Card  className="cardcont2">
  <Card.Body>
  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-suit-heart-fill heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
            </svg>
       <h1><b>{this.props.price}</b></h1>
  <p>{this.props.name}</p>
  <br/>
  <p>{this.props.address}</p>
  </Card.Body>
  </Card>

  <Card className="cardcont3">
  <Card.Body>
  <h2>Seller description</h2>
  <Row>
  <Col className="col-2">
  <img className="image" src={user}></img>
  </Col>
  <Col>
       <p><b>{this.props.sellerName}</b></p>
  <br/>
  <small>Member since Apr 2018</small>
  </Col>     
  <button><b>chat with seller</b></button>
  </Row>
  </Card.Body>

  </Card>
  <Card className="cardcont3">
  <Card.Body>
  <h2>Posted in</h2>
  <p>{this.props.address}</p>
  <div>
  <img src={this.props.src2}></img>
  </div>
  
  </Card.Body>                      
  </Card>
  </Col>                                                                  
  </Row>
  </Container>

            </div>
        )
    }
}
export default Details;