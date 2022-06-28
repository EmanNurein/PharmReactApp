import React  from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return(
        <>
              <hr/>
            {/* <center> 
                <h2>&copy; Emaa Pharmacy</h2>
            </center>  */}

    <div class="bg-lightgrey text-center">
              <div className="container1 p-4 pb-0">
                <section class="mb-4">
                  <div className="row copyright">
                    <div className="footer-menu">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="#">Services</Link>
                    <Link to="/listing1">Products</Link>
                    <Link to="/contactus">Contact Us</Link>
                    </div>
                  </div>
                </section>
              
                <section className="mb-4">
                 
                  <Link className="btn btn-primary btn-floating m-1"
                    style={{backgroundCcolor: '#3b5998' , width:'4%'}}
                    to="https://www.facebook.com/" target="_blank"
                    role="button"><i className="fab fa-facebook-f"></i></Link>
            
                  <Link class="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#55acee',width:'4%'}}
                    to="https://www.twitter.com/"target="_blank"
                    role="button"><i className="fab fa-twitter"></i></Link>
            
                  <Link className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#ac2bac',width:'4%'}}
                    to="https://www.instegram.com/" target="_blank"
                    role="button"><i className="fab fa-instagram"></i ></Link>

                  <Link className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#33d2dd',width:'4%'}}
                    to="https://www.Linkedin.com/" target="_blank"
                    role="button"><i className="fab fa-linkedin"></i ></Link>
                </section>
               
              </div>
         
              <div className="text-center p-3" style={{backgroundColor: '#2671f0', fontFamily:'TimeNew Roman'}}>
                © 2022 Copyright:
                <Link className="text-white" to="/">EmaaPharmacy.com</Link>
              </div>
            
            </div>
          
        </>
    )
}


export default Footer; 