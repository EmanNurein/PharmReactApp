import React from 'react'
import {Link} from 'react-router-dom';



const QuickDisplay = (props) => {


    const listProduct = ({productData}) => {
        console.log(">>>>productData",productData)
        if(productData){
            console.log(">>>>productData",productData)
            return productData.map((item) => {
                return(
                    <Link to = {`/listing/${item.producttype_id}`} key = {item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src= {item.image} alt={item.producttype_name} className="card-img-top"/>
                                {/* <img src="https://i.ibb.co/R3ngpJZ/Galvus-Met-removebg-preview.png" alt="Galvus-Met" className="card-img-top"/> */}
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <span>{item.producttype_name}</span>
                                </div>
                                <div className="componentSubHeading">
                                        {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div id="mainContainer">
            {listProduct(props)}
        </div>
    )
}


export default QuickDisplay;