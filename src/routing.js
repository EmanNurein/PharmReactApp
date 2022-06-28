import React from'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home1 from './Component/Home1/Home1';
import Listing1 from './Component/Listing1/listing1';
import Details from './Component/details/pharmDetails';
import PlaceOrder from './Component/Booking/placeOrder';
import ViewOrder from './Component/Booking/viewOrder';
import Login from './Component/login/loginComponent';
import Register from './Component/login/registerComponent';
import AboutUs from './Component/AboutUs/aboutus';
import ContactUs from './Component/ContactUs/contactus'
import LoginForm from './Component/login/loginform';
import Services from './Component/Services/services';


const Routing =() => {
    return(
        <BrowserRouter>
            <Header/>
                    <Route exact path ="/"  component = {Home1}/>
                    <Route exact path ="/aboutus"  component = {AboutUs}/>
                    <Route exact path ="/contactus"  component = {ContactUs}/>
                    <Route exact path ="/services"  component = {Services}/>
                    <Route path ="/listing1"  component = {Listing1}/> 
                    <Route path ="/details"  component = {Details}/>
                    <Route path ="/placeOrder/:pharmName"  component = {PlaceOrder}/>
                    <Route path ="/viewBooking"  component = {ViewOrder}/> 
                    <Route path ="/loign"  component = {Login}/> 
                    <Route path ="/register"  component = {Register}/> 
                    <Route path ="/loginform"  component = {LoginForm}/> 
                    <br/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;

