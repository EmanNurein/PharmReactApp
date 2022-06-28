/* eslint-disable jsx-a11y/alt-text */
import React, {Component}  from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Header.css';


const url = "http://localhost:5000/api/auth/userinfo"

class Header extends Component {

      constructor(){
        super()

        this.state = {
          userData:'',
          userImg:'',
          userName:''
        }
      }


      handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
      }

      conditionalHeader = () => {
        if(this.state.userData.name){
        // if(this.state.userData.name || sessionStorage.getItem('uName') !==null ){
        //   if(sessionStorage.getItem('uName') !==null){
        //       let name = sessionStorage.getItem('uName')
        //       let image = sessionStorage.getItem('uImg')
        //       return(
        //         <>
        //         <Link to="/" className="btn btn-success">
        //             Hi <img src={image} style={{height:50,width:50}}/> {name}
        //         </Link> &nbsp;
        //         <div className="btnlogin">
        //                 <button onClick={this.handleLogout} className="btn btn-danger">
        //                 Logout
        //                 </button>
        //         </div>
        //         </>
        //     )
        // }
        // else{
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',outArray)
            sessionStorage.setItem('loginStatus',true)
              return(
                <>
                <div className="btnlogin1">
                  <Link to="/"  className = "btn btn-success" style = {{color:'white'}}>
                  <span className="glyphicon glyphicon-user"></span>Hi {data.name}</Link>
                </div>
                <div className="btnlogin4">
                  <button onClick = {this.handleLogout}  className = "btn btn-danger" style = {{color:'white'}}>
                    Logout
                  </button>
                </div>
                </>
              )
          }
            else {
              return(
                <>
                <div className="btnlogin">
                    <Link to="https://github.com/login/oauth/authorize?client_id=9176b4958929e2c28dd6" className="btn btn-success" style = {{width:'110%', fontSize:'15px'}}>
                       <span className="glyphicon glyphicon-log-in"></span> Login With Git
                    </Link>
                    </div> &nbsp; 
                {/* <div className="btnlogin1 ">
                    <Link to="/loginform"  className = "btn btn-success" style = {{color:'white', width:'120%', fontSize:'15px'}}>
                    <span className="glyphicon glyphicon-log-in"></span>Login</Link>
                </div> 
                <div className="btnlogin3 ">
                    <Link to="/register"  className = "btn btn-primary" style = {{color:'white',width:'100%', fontSize:'15px'}}>
                    <span className="glyphicon glyphicon-user"></span>Register</Link>
                </div> */}
                </>
              )
            }
      }

    render(){
        return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Emaa Pharmacy</Link>
                  <Link  to="/" className = "btn5 btn-info">Home</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button> 

                  {this.conditionalHeader()}
                  
                  <ul className="nav justify-content-end">
                    <ul className="nav nav-tab">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link"  to={`/aboutus`}> About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link"  to= {`/services`}>Services</Link>
                      </li>
                      <li className="nav-item dropdown"  data-bs-toggle="tab">
                        <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Products</Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={`/Listing1`}>Tablets</Link></li>
                        <li><Link className="dropdown-item" to={`/Listing1`}>Liquid</Link></li>
                        <li><Link className="dropdown-item" to={`/Listing1`}>Injections</Link></li>
                        <li><Link className="dropdown-item" to={`/Listing1`}>Capsule</Link></li>
                        <li><Link className="dropdown-item" to={`/Listing1`}>Drops</Link></li>
                        <li><Link className="dropdown-item" to={`/Listing1`}>Inhaler</Link></li>
                        <li><Link className="dropdown-item" to={`/Listing1`}>Tropical Medicine</Link></li>
                        <li><Link className="dropdown-item" to={`/Listing1`}>Devices</Link></li>
                      </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link"  to={`/contactus`}> Contact Us</Link>
                      </li> 
                      <li className="nav-item">
                      <Link to="/loginform"  className = "btn btn-success" style = {{color:'white', width:'120%', fontSize:'15px'}}>
                    <span className="glyphicon glyphicon-log-in"></span>Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/register"  className = "btn btn-primary" style = {{color:'white',width:'100%', fontSize:'15px'}}>
                    <span className="glyphicon glyphicon-user"></span>Register</Link>
                    </li>
                    </ul>
                  </ul> 
                </div>
              </nav>
            </header>
          </div>
        )
    } 

    componenDidMount(){

    //   if(this.props.location.search){
    //     if(this.props.location.search.split('=')[0] === '?code'){
    //         var code = this.props.location.search.split('=')[1]
    //     }
    //     if(code){
    //         let requestedData = {
    //             code:code
    //         }
    //         fetch(`http://localhost:9800/oauth`,{
    //             method: 'POST',
    //             headers:{
    //                 'Accept':'application/json',
    //                 'Content-Type':'application/json'
    //             },
    //             body: JSON.stringify(requestedData)
    //         })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             let username = data.name;
    //             let img = data.avatar_url;
    //             sessionStorage.setItem('uName',username);
    //             sessionStorage.setItem('uImg',img);
    //             sessionStorage.setItem('loginStatus',true)
    //             this.setState({userImg:img,userName:username});

    //         })
    //     }
    // }
      fetch(url, {
        method:'GET',
        headers:{
          'x-access-token':sessionStorage.getItem('ltk')
        }
      })
      .then((res) => res.json())
      .then((data) => {
          this.setState({
            userData:data
          })
      })
    }
}


export default withRouter(Header); 