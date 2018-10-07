import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import config from './../../config'

class LoginForm extends Component {

constructor() {
    super()
   
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    
    this.state = {
        
        user: {
            email: undefined,
            password: undefined,
            signUp: {
                success: undefined,
                message: undefined
            },
            logged: false,
            users: undefined,
            error: undefined
            
    }}
}
    //For can find in the React google app
    static displayName = 'ui-LoginForm'
    
    //Route to page /user after login
    reloadPage() {
        window.location.href= config.URL_LOCAL + "/user"
    }
    /*
    Register Form area
    */

    //Formulario submit
    handleSubmit(e) {
        e.preventDefault()
        //Dates to Login
        let dataToSend = {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        }

        if(dataToSend.user.email === undefined || dataToSend.user.password === undefined){
            return alert("Required fields Email/Senha")
        }else{ 
        console.log(JSON.stringify(dataToSend))
        //URL for authentication
        let url = 'http://localhost:4000/users/auth'


        //Route from the Login to the Backend
        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                //Change the Success State for true and set a Token in Local Storage
                if (responseJson.success) {
                    localStorage.setItem('DD101_TOKEN', responseJson.token)
                    this.setState({
                        logged: true,
                        error: undefined
                    })
                    //Page Reload
                    this.reloadPage()
                    
                }else{
                    if(this.state.error === undefined) alert("Email or Password invalid")
                }
            }).catch(err => this.setState({ error: err }))
        }
    }
    /**Make the change in the Email State*/
    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    /**Make the change in the Password state*/
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }
    
    render() {
        return (

            <div className="row" style={{ paddingTop: '50px' }}>
            <div className="col">
            </div>
            <div className="col">
                <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <div className="card-body">
                                <form>
                                    <div className="page-header">
                                        <h1>Login</h1>
                                    </div>
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={this.handleEmailChange} className="form-control" id="email-login" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" required onChange={this.handlePasswordChange} className="form-control" id="password-login" placeholder="Password" />
                                    </div>
                                    <button  className="btn btn-secondary btn-block" type="submit" onClick={this.handleSubmit}>Login</button>
                                    <Link to="/signup" className="btn btn-secondary btn-block" href="/signup" id="signup">Signup</Link>
                                </form>
                                </div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        
        )}
}
export default withRouter(LoginForm)
