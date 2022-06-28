import React, {Component} from 'react';
import './QuickSearch1.css';
import QuickDisplay1 from './QuickDisplay1';

const url = "https://pharm-project.herokuapp.com/producttype"

class QuickSearch1 extends Component {

    constructor(){
        super()
        
        this.state={
            productType:''
        }
    }

    render(){
        return(
            <div>
                <div id="QuickSearch">  
                    <span id="QuickHeading">
                        Quick Search
                    </span>
                    <span id="QuickSubHeading">
                        Discover Pharmacy By Product
                    </span>
                     <QuickDisplay1 productData = {this.state.productType}/>       
                </div> 
            </div>
        )
    }

    componentDidMount(){
       fetch(url, {method:'GET'})
            .then((res) => res.json())
            .then((data) => {
            this.setState({productType:data})
        })
    }
}

export default QuickSearch1;
         
