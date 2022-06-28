import React, {Component} from 'react';



class ProductDisplay extends Component {

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id) , 1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) =>  {
                return (
                    <b Key = {index}>{item}&nbsp;</b>
                )
            })
        }
    }

    renderProduct = ({productData}) => {
        if(productData){
            return productData.map((item) => {
                return(
                    <>
                    <div Key = {item._id}>
                        <div className = "col-md-7">
                            <b>{item.product_id}</b>&nbsp;&nbsp;
                            <img src = {item.product_image} style = {{width:80 , height:80, marginLeft:'2%' , marginTop:'3%'}}  alt = ""/>&nbsp;&nbsp;
                            {item.product_name}- SD.{item.cost}
                        </div>
                        <div className = "col-md-5" style={{marginTop:'-3%'}}>
                            <button className = "btn2 btn-success"
                            onClick={() => {this.placeOrder(item.product_id)}}>
                            <span className="glyphicon glyphicon-plus"/>
                            </button>&nbsp;&nbsp;<br/><br/>
                            <button className = "btn2 btn-danger"
                            onClick={() => {this.removeOrder(item.product_id)}}>
                            <span className="glyphicon glyphicon-minus"/>
                            </button> 
                        </div> 
                    </div>
                    </>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <div className = "col-md-12 bg-primary" style = {{marginTop:'2%', height:'70px'}}>
                    <h5>Item Added</h5>
                    <h5> Item Number {this.renderCart(this.orderId)} Added </h5>
                </div>
                <div className = "col-md-12 bg-info" style = {{height:'452px'}}>
                    {this.renderProduct(this.props)}
                </div>
            </div>
        )
    }


}



export default ProductDisplay;