import React from'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Listing from './Component/Listing/listing';
import Details from './Component/details/pharmDetails';


const Routing =() => {
    return(
        <BrowserRouter>
            <Header/>
                    <Route exact path ="/"  component = {Home}/>
                    <Route path ="/listing"  component = {Listing}/>
                    <Route path ="/details"  component = {Details}/>
                    <br/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;

