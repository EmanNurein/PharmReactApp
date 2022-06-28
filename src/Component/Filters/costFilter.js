import React, { Component } from 'react';
import axios from 'axios';

const url = "https://pharm-project.herokuapp.com/filters";



class CostFilter extends Component{

    filterCost = (event) => {
        let productId = sessionStorage.getItem('productId');
        let cost = event.target.value.split('-');
        let lcost = Number(cost[0])
        let hcost = Number(cost[1])
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${productId}`
        }else{
            costUrl = `${url}/${productId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.pharmPerCost(res.data)})
    }

    render(){
        return(
            <><br/>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="producttype"/> All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="500-1000" name="producttype"/> 500-1000
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="1050-1600" name="producttype"/> 1050-1600
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="1650-5000" name="producttype"/> 1650-5000
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5500-9000" name="producttype"/> 5500-9000
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="9100-12000" name="producttype"/>9100-12000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter
