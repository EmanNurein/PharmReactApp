import React from'react';
import {Link} from 'react-router-dom';


const ListingDisplay1 = (props) => {

    const renderData = ({listData}) =>{
        if(listData){
    if(listData.length>0){
            return listData.map((item) => {
            return(
                <div className="item" key={item.pharmacy_id}>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={item.pharmacy_image} className="Image"
                            alt={item.pharmacy_name}/>
                        </div>
                        <div className="col-md-7">
                            <div className="pharmacy_name">
                                <Link to= {`/details?pharmId=${item._id}`}>
                                {/* <Link to= {`/details/${item.pharmacy_id}`}> */}
                                    {item.pharmacy_name}
                                </Link>
                                <div className="city_name">{item.address}</div>
                                {/* <div className="city_name">{item.rating_text}</div> */}
                                <div className="city_name">Rs. {item.cost}</div>
                                <div className="labelDiv">
                                    <span className="label label-primary">
                                        {item.productTypes[0].producttype_name}
                                    </span>&nbsp;<br/>
                                    <span className="label label-success">
                                        {item.productTypes[1].producttype_name}
                                    </span>&nbsp;<br/>
                                    <span className="label label-primary">
                                        {item.productTypes[2].producttype_name}
                                    </span>&nbsp;<br/>
                                    <span className="label label-success">
                                        {item.productTypes[3].producttype_name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        })

        }else{
            return(
                <div>
                    <h2>No Data For Filter Applied </h2>
                </div>
            )
        }
        }else{
            return(
                <div>
                    <img src = "/images/loader.gif" alt="loader"/>
                    <h2>Loading......</h2>
                </div>
            )
        }
    }

    return(
        
        <div id= "content">
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay1;



