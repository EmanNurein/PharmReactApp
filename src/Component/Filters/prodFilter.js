import React, { Component } from 'react';
import axios from 'axios';

const url = "https://pharm-project.herokuapp.com/filters";



class ProductFilter extends Component{

    filterProductType = (event) => {
        let productId = sessionStorage.getItem('productId');
        let producttypeId = event.target.value;
        let producttypeUrl = ""
        if(producttypeId === ""){
            producttypeUrl = `${url}/${productId}`
        }else{
            producttypeUrl = `${url}/${productId}?producttype=${producttypeId}`
        }
        axios.get(producttypeUrl)
        .then((res) => {this.props.pharmPerProductType(res.data)})
    }
    
    render(){
        return(
            <>
                <center>ProductType Filters</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterProductType}>
                    <label className="radio">
                        <input type="radio" value="" name="prodcuttype"/> All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="1" name="prodcuttype"/> Tablets
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="2" name="prodcuttype"/> Liquid
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="3" name="prodcuttype"/> Injections
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="4" name="prodcuttype"/> Capsule
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5" name="prodcuttype"/> Drops
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5" name="prodcuttype"/> Inhaler
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5" name="prodcuttype"/> Tropical Medicine
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5" name="prodcuttype"/> Devices
                    </label>
                </div>
            </>
        )
    }

}

export default ProductFilter;
