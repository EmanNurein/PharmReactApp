import React, {Component} from 'react';
import './Search1.css';
import { withRouter } from 'react-router-dom';



const url = "https://pharm-project.herokuapp.com/location"
const pharmUrl = "https://pharm-project.herokuapp.com/pharmacy/?stateId="


class Search1 extends Component {

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

    renderPharm = (data) =>{
        if(data){
            return data.map((item) => {
                return(
                    <option key = {item.pharmacy_id} value={item.pharmacy_id}>{item.pharmacy_name}|{item.address}</option>
                )
            })
        }   
    }


    handlePharmacy = (event) => {
        let pharmId = event.target.value;
        console.log(">>>>inside",pharmId)
        this.props.history.push(`/details?pharmId=${pharmId}`)
    }


    handleCity = (event) => {
        let pharmId = event.target.value;
        fetch(`${pharmUrl}${pharmId}`, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(">>>>data>>",data)
            this.setState({pharmacy:data})
        })       
    }
   
            

    render(){
        // console.log(">>>> inside render")
        console.log(">>>> inside props",this.props)

        return(
            <div id="search">
                <div id="logo">
                    <span>EPH</span>
                </div>
                 
            <div id="heading">
                Find Your Pharmacy
            </div>
            <div className="dropdown1">
                <select onChange={this.handleCity}>
                    <option>------PLEASE SELECT CITY------</option>
                      {this.renderCity(this.state.location)}
                </select>
                <select className="Pharmlist" onChange={this.handlePharmacy}>
                    <option>------PLEASE SELECT PHARMACY------</option>
                      {this.renderPharm(this.state.pharmacy)}
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



export default withRouter(Search1);