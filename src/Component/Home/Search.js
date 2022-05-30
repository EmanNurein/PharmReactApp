import React, {Component} from 'react';
import './Search.css';


const url = "https://pharm-project.herokuapp.com/location"
const pharmUrl = " https://pharm-project.herokuapp.com/pharmacy/?state_id="


class Search extends Component {

    constructor(props){
        super(props)

            console.log(">>>> inside constructor")
            this.state={
                location:'',
                pharmacy:''
            }
    }


    renderCity = (data) => {
        console.log(">>>>>data>>", data)

        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key = {item.state_id}>{item.state}</option>
                )
            })
       }
    }

    renderPharma = (data) =>{
        if(data){
            return data.map((item) => {
                return(
                    <option key = {item.pharmacy_id} value={item.pharmacy_id}>{item.pharmacy_name}|{item.address}</option>
                )
            })
        }   
    }

    handlePharmacy = (event) => {
        let state_id = event.target.value;
        fetch(`${pharmUrl}${state_id}`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(">>>>data>>",data)
            this.setState({pharmacy:data})
        })       
    }
            

    render(){
        console.log(">>>> inside render")

        return(
            <div id="search">
                <div id="logo">
                    <span>EPH</span>
                </div>
                 
            <div id="heading">
                Find Your Pharmacy
            </div>
            <div className="dropdown1">
                <select onChange={this.handlePharmacy}>
                    <option>------PLEASE SELECT CITY------</option>
                      {this.renderCity(this.state.location)}
                </select>
                <select className="Pharmlist">
                    <option>------PLEASE SELECT PHARMACY------</option>
                      {this.renderPharma(this.state.pharmacy)}
                </select>
            </div>
          </div>           
        )
    }


    componentDidMount(){
        console.log(">>>> inside componentDidMount")
        fetch(url, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })       
    }
}



export default Search;