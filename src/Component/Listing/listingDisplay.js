import React from'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {
    

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) =>{
                    return(
                        <div id="card">
                        <span id="Heading1">
                            Pharmacy
                        </span>
                        <span id="subHeading">
                            Find Your  Medicine
                        </span>
                        <div id="mainContainers">
                            <div className="tileContainers">
                                <div className="tileComponent3">
                                    <img src="https://i.ibb.co/3s6mYmh/pharmacy1.jpg" alt="Althalatheen"/>

                                </div>
                            </div>
                            <div className="contentDiv">
                                    <h1>Althalatheen Pharmacy</h1>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star"></i>
                                    <span>378 Customer Reviews</span>
                                    <h3>Reviewing medications for safety and efficacy.</h3>
                                    <div className="city_name">{item.address}</div>
                                    <div className="city_name">Rs. {item.cost}</div>
                            </div>   
                                <div className ="center">
                                    <div>
                                    <button className="btn btn-checkout"><Link to={`/details?pharmId=${item._id}`} target="_blank">Products</Link></button>
                                    </div>
                                </div>
                            <br/>
                            <hr/>
                            <div className="tileContainers">
                                <div className="tileComponent4">
                                    <img src="https://i.ibb.co/wJ1tPz2/service-cust.jpg" alt="Almek Nimer"/>
                                </div>
                            </div>
                            <div className="contentDiv">
                                    <h1>Almek Nimer Pharmacy</h1>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star"></i>
                                    <span>174 Customer Reviews</span>
                                    <h3>Reviewing medications for safety and efficacy.</h3>
                                    <div className="city_name">{item.address}</div>
                                    <div className="city_name">Rs. {item.cost}</div> 
                            </div>
                            <div className ="center">
                                <div>
                                    <button className="btn btn-checkout"><Link to={`/details?pharmId=${item._id}`} target="_blank">Products</Link></button>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                            <div className="tileContainers">
                                <div className="tileComponent5">
                                    <img src="https://i.ibb.co/K6PRqXD/pharm.jpg" alt="Ibtisam"/>
                                </div>
                            </div>
                            <div className="contentDiv">
                                    <h1>Ibtisam Pharmacy</h1>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star checked"></i>
                                    <i className="far fa-star "></i>
                                    <i className="far fa-star"></i>
                                    <span>Rate of 5 Customer Reviews</span>
                                    <h3>Reviewing medications for safety and efficacy.</h3>
                                    <div className="city_name">{item.address}</div>
                                    <div className="city_name">Rs. {item.cost}</div> 
                            </div>
                            <div className ="center">
                                <div>
                                    <button className="btn btn-checkout"><Link to={`/details?pharmId=${item._id}`} target="_blank">Products</Link></button>
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
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;