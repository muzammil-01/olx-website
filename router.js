import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Details from './finalproducts'
import Home from './home'

class AppRouter extends Component{
    render(){
        return(
            <div>
                <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/productdetails" component={Details}/>
                </Router>
            </div>
        )
    }
}
export default AppRouter;