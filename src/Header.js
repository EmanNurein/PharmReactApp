import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


class Header extends Component {
    render(){
        return(
        <div>
            <header>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Emaa Pharmacy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button> 
                  
                    <ul className="nav justify-content-end">
                      <ul className="nav nav-tab">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  href="aboutus.html"> About Us</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" data-bs-toggle="tab" href="#">Services</Link>
                        </li>
                        <li className="nav-item dropdown"  data-bs-toggle="tab">
                          <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Products</Link>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="Listing/listing.html">Tablets</Link></li>
                            <li><Link className="dropdown-item" href="Listing/listing.html">Liquid</Link></li>
                            <li><Link className="dropdown-item" href="Listing/listing.html">Injections</Link></li>
                            <li><Link className="dropdown-item" href="Listing/listing.html">Capsule</Link></li>
                            <li><Link className="dropdown-item" href="Listing/listing.html">Drops</Link></li>
                            <li><Link className="dropdown-item" href="Listing/listing.html">Inhaler</Link></li>
                            <li><Link className="dropdown-item" href="Listing/listing.html">Topical Medicine</Link></li>
                            <li><Link className="dropdown-item" href="Listing/listing.html">Devices</Link></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link"  href="contactus.html">Contact Us</Link>
                        </li>
                        <ul className="nav navbar-nav navbar-right">
                          <li><Link href="form1.html" target="_blanck"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
                        </ul>
                      </ul>
                    </ul>
                  </div>
                </nav>
            </header>
            </div>
        )
    } 
}


export default Header; 