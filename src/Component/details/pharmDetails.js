import React, {Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom'


const url = "https://pharm-project.herokuapp.com/details"
const prodUrl = "https://pharm-project.herokuapp.com/products/?pharmId=1"


class PharmDetails extends Component {

    constructor(){
        super()

        this.state = {
            details:'',
            productId:sessionStorage.getItem('productId')?sessionStorage.getItem('productId'):1
        }
    }
    render(){
        // let details = this.state.details
        let {details} = this.state
        return(
            <>
          
                <div id="mainContent2">
                <div className="imgDiv">
                    {/* <img src = {details.pharmacy_image} alt = "pharmacy"/> */}
                    <img src="https://i.ibb.co/3s6mYmh/pharmacy1.jpg" alt="Althalatheen"/>
                </div>
                <div className="contentDiv2">
                    <h1>Althalatheen Pharmacy</h1>
                    {/* <h1>{details.pharmacy_name}</h1> */}
                    <span1> 378 Customer Rating </span1><br/><br/>
                    <span1>  Price of Product:{details.cost} </span1>
                    <h3><li>Make drugs and medicines available.</li></h3>
                    <h3><li>Reviewing medications for safety and efficacy.</li></h3>
                    <h3><li>Pharmacists helping to understand the correct dose of a new medicine,</li></h3>
                    <h3><li>and how often you need to take it</li></h3>
                  
                    <h4>Available</h4>
                    <div>
                        <Link to = {`/listing/${this.state.productId}`} className="btn1 btn-danger">Back</Link>
                        <button className="btn1 btn-checkout">Add to Card</button>
                        <button className="btn1 btn-proceed">Checkout</button>
                    </div>
                </div>                          
            </div>                
    </>
        )
    }
    async componentDidMount(){
        let pharmId = this.props.location.search.split("=")[1];
        let response = await axios.get(`${url}/${pharmId}`)
        this.setState({details:response.data[0]})
    }
}


export default PharmDetails;
