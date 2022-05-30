import React, {Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "https://pharm-project.herokuapp.com/producttype"

class QuickSearch extends Component {
         
    constructor(){
        super()

        this.state = {
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
                        Discover Pharmacy with Products 
                    </span>
                    <QuickDisplay productData = {this.state.productType}/>       
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


export default QuickSearch;