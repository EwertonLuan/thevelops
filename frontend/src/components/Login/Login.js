import React, { Component } from 'react';
import {login} from './../User/API'
import { withRouter,Link } from 'react-router-dom';

class LoginForm extends Component {

constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
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

    static displayName = 'ui-LoginForm'

    componentDidMount() {
        this.verifytoken();
    }

    verifytoken() {
        let url = 'http://localhost:4000/api/users/verify';
        let token = localStorage.getItem('DD101_TOKEN');

        if (!token) {
            this.setState({
                error: 'No token defined. Please Login.'
            })
            return
        }

        fetch(url, {
            method: "GET",
            body: undefined,
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            }
        }).then(response => response.json())
            .then(responseJson => {
                if (responseJson.success) {
                    this.setState({
                        logged: responseJson.success,
                        error: undefined
                    })
                    // this.loadUsers()
                } else {
                    this.setState({
                        error: responseJson.error.message
                    })
                }
            }).catch(err => this.setState({ error: err }));
    }

    // loadUsers() {
    //     let url = 'http://localhost:4000/';
    //     let token = localStorage.getItem('DD101_TOKEN');
    //     if (!token) {
    //         this.setState({
    //             error: 'No token defined. Please Login.'
    //         })
    //         return
    //     }

    //     fetch(url, {
    //         method: "POST",
    //         body: undefined,
    //         headers: {
    //             "Content-Type": "application/json",
    //             "authorization": `Bearer ${token}`
    //         }
    //     }).then(response => response.json())
    //         .then(responseJson => {
    //             this.setState({
    //                 users: responseJson.data,
    //                 error: undefined
    //             })
    //         }).catch(err => this.setState({ error: err }));
    // }


    showAuthorizedArea() {
        if (this.state.logged) {
            return (
                <div>
                    <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#authenticatedModal" data-whatever="@mdo" >Call Authenticated only API</button>
                    <small id="emailHelp" className="form-text text-muted">Only registered and logged users can call and see the list. Plese click the button above to call the API.</small>
                </div>
            );
        }
    }

    /*
    Register Form area
    */

    //Subimite do formulario
    handleSubmit(e) {
        e.preventDefault();
        let dataToSend = {
            user: {
                email: this.state.email,
                password: this.state.password
            }
            
        };

        if(dataToSend.user.email === undefined || dataToSend.user.password === undefined){
            return alert("Campos obrigatorios Email/Senha")
        }else{ 
        console.log(JSON.stringify(dataToSend))
        //url da api para realizar post
        let url = 'http://localhost:4000/api/users/auth';


        //encaminha o post para o backend
        fetch(url, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                if (responseJson.success) {
                    localStorage.setItem('DD101_TOKEN', responseJson.token);
                    // this.setState({
                    //     logged: true,
                    //     error: undefined
                    // })
                    // this.loadUsers()
                }
            }).catch(err => this.setState({ error: err }));
        }

            
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    

    render() {
        return (
            <div className="container">
                {/* Begin Modal Register Form */}
                {/* Begin Modal Register Form */}

                {/* Begin Modal List Authenticad List  */}
                

                {/* Begin Login Form */}
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            {/* <img className="card-img-top" src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAV3AAAAJDEwODQxZWI3LTYyMmUtNDEzZS04YjNlLTNmNzA0YjY0OTMwMg.jpg" alt="Card image cap" /> */}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" required="required" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            
                                        </label>
                                    </div>
                                    <Link type="submit" to="/" onClick={this.handleSubmit} className="btn btn-primary btn-block">Login</Link>
                                    <small id="emailHelp" className="form-text text-muted">If you are not registered. Plese <a href="/signup" data-toggle="modal" data-target="#signupModel" data-whatever="@mdo" >Signup</a></small>
                                    <br />
                                    {
                                        this.showAuthorizedArea()
                                    }
                                    
                                </form>


                            </div>
                        </div>

                    </div>
                    <div className="col">
                        
                    </div>
                </div>
                {/* End Login Form */}
            </div>
        );
    }
}
export default LoginForm;