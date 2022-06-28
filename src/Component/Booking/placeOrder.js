import React, {Component} from 'react';
import './placeOrder.css';


const url = "https://pharm-project.herokuapp.com/productItem";
const purl = "https://pharm-project.herokuapp.com/placeOrder";

class PlaceOrder extends Component {

    constructor(props){
        super(props)

        this.state = {
            id:Math.floor(Math.random()*10000),
            pharmacy_name:'this.props.match.params.pharmName',
            name:'',
            email:'',
            cost: 0,
            phone:'',
            address:'Hon 30',
            productItem:''
        }
        // this.state = {
        //     id:Math.floor(Math.random()*10000),
        //     pharmacy_name:this.props.match.params.pharmName,
        //     name:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[0]:'',
        //     email:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:'',
        //     cost: 0,
        //     phone:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[2]:'',
        //     address:'Hon 30',
        //     productItem:''
        // }
    }


    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }


    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className = "orderItems" Key = {item.product_id}>
                        <img src = {item.product_image} alt = {item.product_name}/>
                        <h6>{item.product_name}</h6><br/>
                        <h6>SD.{item.cost}</h6>
                    </div>
                )
            })
        }
    }


    checkout = () => {
        console.log(this.state)
        let obj = this.state;
        obj.productItem = sessionStorage.getItem('product')
        fetch(purl, {
            method:'POST',
            headers:{
                'accept':'application/json',
                'ContenT-Type':'application/json'
            },
                
            body:JSON.stringify(obj)
        })

        // .then(this.props.history.push('/viewBooking'))
            .then(console.log('order Added'))
    }



    render(){
        // if(!sessionStorage.getItem('loginStatus')){
        //     return(
        //         <div>
        //             <center>
        //                 <h2>Login First To Place Order</h2>    
        //             </center>
        //         </div>
        //     )
        // }
        
        return(
            <>
           
            <div className = "container2" style = {{height:'890px'}}>
                <hr/>
            <div className = "panel panel-primary">
                <div className = "panel-heading">
                    <h2 style = {{height:'50px',width:'80%'}}>Your Order for {this.props.match.params.pharmName}</h2>
                </div>
                <div className = "panel-body">
                <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                        <input type="hidden" name = "cost" value= {this.state.cost}/>
                        <input type="hidden" name = "id" value= {this.state.id}/>
                        <input type="hidden" name = "pharmacy_name" value= {this.state.pharmacy_name}/>
                    <div className = "row">
                        <div className = "col-md-6 form-group">
                            <label for = "fname">Name</label>
                            <input id= "fname" name = "name" className = "form-control"
                            value = {this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className = "col-md-6 form-group">
                            <label for = "email">Email</label>
                            <input id= "email" name = "email" className = "form-control"
                            value = {this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className = "col-md-6 form-group">
                            <label for = "phone">Phone</label>
                            <input id= "phone" name = "phone" className = "form-control"
                            value = {this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div className = "col-md-6 form-group">
                            <label for = "address">Address</label>
                            <input id= "address" name = "address" className = "form-control"
                            value = {this.state.address} onChange={this.handleChange}/>
                        </div>
                    </div>
                    {this.renderItem(this.state.productItem)}
                    <div className = "row">
                        <div className = "col-md-12"><br/>
                            <h4 style = {{marginTop: '33%'}}>Total Price is SD.{this.state.cost}</h4>
                        </div>
                    </div>
                    <button className = "btn4 btn-success" onClick={this.checkout}>Proceed</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

    componentDidMount(){
        let productItem = sessionStorage.getItem('product');
        let orderId = [];
        productItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'Ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.cost);
                return 'Ok'
            })
            this.setState({productItem:data, cost:totalPrice})
        })
    }

}


export default PlaceOrder;