import React, {Component} from 'react';



const url = "http://localhost:5000/api/auth/register";


class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }


    register = () => {
        fetch(url, {
            method:'POST',
            headers:{
                'accept':'application/json',
                'ContenT-Type':'application/json'
            },
                
            body:JSON.stringify(this.state)
        })

        .then(this.props.history.push('/loginform'))

    }



    render(){
        return(
            <>

            <div className = "container3" style = {{height:'880px',marginTop:'5%'}}>
                <hr/>
            <div className = "panel panel-primary">
                <div className = "panel-heading" style = {{fontSize:'25px', marginLeft:'-65%',fontFamily:'monospace'}}>
                    Register
                </div>
                <div className = "panel-body">
                    <div className = "row" style = {{width:'80%' , marginLeft:'7%'}}>
                        <div className = "col-md-6 form-group">
                            <label1 for = "fname" style = {{marginLeft:'9%'}}>Name</label1>
                            <input id= "fname" name = "name" className = "form-control"
                            value = {this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className = "col-md-6 form-group">
                            <label1 for = "password" style = {{marginLeft:'9%'}}>Password</label1>
                            <input id= "password" name = "password" className = "form-control"
                            value = {this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className = "col-md-6 form-group">
                            <label1 for = "email" style = {{marginLeft:'9%'}}>Email</label1>
                            <input id= "email" name = "email" className = "form-control"
                            value = {this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className = "col-md-6 form-group">
                            <label1 for = "phone" style = {{marginLeft:'9%'}}>Phone</label1>
                            <input id= "phone" name = "phone" className = "form-control"
                            value = {this.state.phone} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button className = "btn5 btn-success" style = {{width:'7%', marginTop:'2%',marginLeft:'15%'}}  onClick={this.register}>Register</button>
                </div>
            </div>
        </div>
        </>
    )
}

}


export default Register;