import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './loginform.css';


class LoginForm extends Component {

    render(){

        return(
            <>
            <div className ="container">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading1">
                        <h3>Login</h3>
                    </div>
                    <hr/>
                    <div className="panel-body">
                        <form action="#"  method="get"> 
                            <div className="form-group1 has-success">
                                <div className="row1"> 
                                    <div className="col-md-8">
                                        <div className="form-group1">
                                            <label for="user name">User Name</label>
                                            <input type="user name" className="form-control"  id="username"  name="username"/>
                                        </div>    
                                    </div>
                                </div>
                                <br/>
                                <div className="row1"> 
                                    <div className="col-md-8">
                                        <div className="form-group1">
                                            <label for="pwd">Password</label>
                                            <input type="password" className="form-control"  id="pwd" 
                                            name="pwd" minlength="8"/>
                                        </div>    
                                    </div>   
                                </div>
                            </div>
                            <br/>
                        <div className="center">
                                <button className="btn btn-success" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default LoginForm;