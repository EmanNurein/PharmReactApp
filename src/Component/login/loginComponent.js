import React,{Component} from 'react';


const url = "http://localhost:5000/api/auth/login";


class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'ahmed@hotmail.com',
            password:'ahmedali',
            message:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        
        // .then(this.props.history.push('/login'))
            .then((res) => res.json())
            .then((data) => {
                if(data.auth === false){
                    this.setState({message:data.token})
                }else{
                    sessionStorage.setItem('ltk',data.token)
                    // this.props.history.push('/')
                    .then(this.props.history.push('/loginform'))
                }
            })
        }

    render(){
        return(
            <>
            <div className="container6">
                <hr/>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        Login
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                             <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            
                        </div>
                        <button className="btn btn-info" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        </>
        )
    }

}

export default Login;


       
