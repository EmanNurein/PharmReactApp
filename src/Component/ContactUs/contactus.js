/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React ,{Component} from 'react'
import './contactus.css'; 
// import {Link} from 'react-router-dom';

 class ContactUs extends Component {
    render(){
      return(
        <>
        <div class="contactme">
                <img src="https://i.ibb.co/w6hgQZM/contact-banner-removebg-preview.png"/>
               
                
              </div> 
          <div className="mycontact1" style = {{height: '650px'}}>
                <br/>
                <div>        
                  <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d61471.19780997048!2d32.44566967050262!3d15.647658071971609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x168e8bf303b5ade3%3A0xffa2d3531b1ae48f!2sOmdurman%20Sudan!3m2!1d15.6475782!2d32.480689399999996!5e0!3m2!1sen!2s!4v1647298680296!5m2!1sen!2s" 
                  style={{border:'0', width:'45%', height:'550px'}} allowfullscreen="" loading="lazy">
                  </iframe> 
                </div>
          
            <div className="container5" style={{ marginTop:'-42%'}}> 
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3>Contact Us</h3>
                </div>
                <div className="panel-body">
                  <form action="#"  method="get"> 
                    <div className="form-group has-error">
                      <label className="control-label" for="fname">Name*</label>
                      <input type="text" className="form-control"  id="fname" placeholder="First Name"name="fname" required  style={{width:'160%'}}/>
                    </div>
                    <br/>
                    <div className="form-group">
                    <label for="email" style = {{marginLeft:'9%'}}>Email*</label>
                      <input type="text" className="form-control" id="email" placeholder="Enter email" name="email"  style={{width:'160%'}}/>
                    </div>
                    <br/>
                    <div className="form-group">
                      <label for="lname" style = {{marginLeft:'9%'}}>Message</label>
                      <textarea id="comment" name="comment" placeholder="Write your Message.." style={{height:'200px', width:'160%', marginLeft:'9%'}}/>
                    </div>
                    <div className="center">
                      <button className="btn btn-primary1" type="submit" data-bs-toggle="modal" data-bs-target="#myModal">
                        Submit
                      </button>
                    </div>                     
                    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="label" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" id="label"> 
                               Welcome EPH
                            </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                              Thank You For Contacting Us
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
        </>
      )
    }
 }

 export default ContactUs;