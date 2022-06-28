import React, {Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';
import ProductDisplay from './prodDisplay';


const url = "https://pharm-project.herokuapp.com/details"
const productUrl = "https://pharm-project.herokuapp.com/products"




class PharmDetails extends Component {

    constructor(){
        super()

        this.state = {
            details:'',
            productList:'',
            userItem:'',
            productId:sessionStorage.getItem('productId')?sessionStorage.getItem('productId'):1
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('product',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.pharmacy_name}`)
    }

    render(){

        // let details = this.state.details
        let {details} = this.state
        console.log(this.state.userItem)


        return(
            <>
                
                <div id="mainContent">
                        <div className="imgDiv">
                            {/* <img src={this.state.details.pharmacy_image} alt="Althalatheen"/> */}
                            <img src="https://i.ibb.co/3s6mYmh/pharmacy1.jpg" alt="Althalatheen"/>
                        </div>
                    <div className="contentDiv"><br/>
                        {/* <h1 style = {{color:'blue', fontSize:'35px'}}>{details.pharmacy_name}</h1><br/><br/><br/><br/> */}
                        <h1 style = {{color:'blue', fontSize:'35px'}}>Althalatheen Pharmacy</h1><br/><br/><br/><br/>
                        <span style = {{fontSize:'20px', marginTop: '5%'}}>378 Customers Rating</span>
                        <h3 style = {{fontSize:'20px'}}><del>Old Price: 1000</del></h3>
                        <h3 style = {{fontSize:'20px'}}>New Price: {details.cost}</h3>
                        <h2 style = {{marginLeft:'-15%', marginTop:'10%',color:'green'}}>Available</h2>
                        <div><br/>
                        <Link to = {`/listing1/${this.state.productId}`} className="btn btn-back" style={{backgroundColor:'lightpink'}} >Back</Link>
                            {/* <button className="btn btn-checkout">Add To Cart</button> */}
                            <button className="btn btn-proceed" style={{backgroundColor:'orange'}} onClick={this.proceed}>Checkout</button>
                        </div>
                    </div>
                </div>
                <div className = "col-md-12">
                    <ProductDisplay productData= {this.state.productList}
                    finalOrder = {(data) => {this.addToCart(data)}}/>
                </div>
            </>
        )
    }

    async componentDidMount(){
        let pharmId = this.props.location.search.split('=')[1];
        // let pharmId = this.props.match.params.id
        let response = await axios.get(`${url}/${pharmId}`)
        console.log(">>>>>>>response.data[0].pharmacy_id",response.data[0].pharmacy_id)
        let productResponse = await axios.get(`${productUrl}?pharmId=${response.data[0].pharmacy_id}`)
        this.setState({details:response.data[0], productList:productResponse.data})
    }
}

export default PharmDetails;

