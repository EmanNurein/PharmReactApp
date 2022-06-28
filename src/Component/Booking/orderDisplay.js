import React from 'react';

const OrderDisplay = (props) => {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr Key = {item.id}>
                        <td>{item.id}</td>
                        <td>{item.pharmacy_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank_name}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className = "container2">
            <center>
                <h2 style = {{marginTop:'-3%',fontSize:'25px'}}>Orders</h2>
            </center>
            <table className = "table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>PhName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BanckName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}


export default OrderDisplay;