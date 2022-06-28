import React from 'react'
import {Link} from 'react-router-dom';



const QuickDisplay1 = (props) => {
           
    const listProduct = ({productData}) => {
        if(productData) {
            return productData.map((item) => {
                return(
                    <Link to = {`/listing1/${item.producttype_id}`} Key = {item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src= {item.image} alt={item.producttype_name}/>
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


export default QuickDisplay1;