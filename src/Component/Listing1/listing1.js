import React , {Component} from 'react';
import axios from 'axios';
import './listing1.css';
import ListingDisplay1 from './listingDisplay1';
import ProductFilter from '../Filters/prodFilter';
import CostFilter from '../Filters/costFilter';


const pharmUrl = "https://pharm-project.herokuapp.com/pharmacy?producttype_id="


class Listing1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            pharmacy:''
        }
    }


    setDataPerFilter = (data) => {
        this.setState({pharmacy:data})
    }


    render(){
        return(
            <>
               <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filters</h3> 
                            </center>
                            <hr/>
                            <ProductFilter pharmPerProductType={(data) => {this.setDataPerFilter(data)}}/>
                            <CostFilter pharmPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        </div>
                    </div>
                    <ListingDisplay1 listData={this.state.pharmacy}/>
                </div> 
            </>
        )
    }
    componentDidMount(){
        let productId = this.props.match.params.id?this.props.match.params.id:1
        sessionStorage.setItem('productId',productId)
        axios.get(`${pharmUrl}${productId}`)
        .then((res) => {this.setState({pharmacy:res.data})})
    }
}

export default Listing1;


