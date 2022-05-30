import React , {Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';


const pharmUrl = "https://pharm-project.herokuapp.com/pharmacy/?producttype_id="


class Listing extends Component {
    constructor(props){
        super(props)

        this.state = {
            pharmacy:''
        }
    }

    render(){
        return(
            <>
                <div className = "row">
                    <div id = "mainListing">
                        <div id ="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                        </div>
                    </div>
                    <ListingDisplay listData={this.state.pharmacy}/>
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

export default Listing;