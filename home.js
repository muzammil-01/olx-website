import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Header from '../component/header'
import Footer from '../component/footer'
import AllCard from '../component/allcards'
import img from '../pics/backimg.PNG'

class Home extends Component{
  
  render(){
    return(
<div>
  <Header/>
  <div> 
    <Row>
<img width="100%" src={img} width="100%"/>
</Row>
</div>
<AllCard/>
  <Footer/> 
  </div>
    )
  }
}

export default Home;