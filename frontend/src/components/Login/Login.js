import React, { Component } from 'react';
import {login} from './../User/API'

class LoginForm extends Component {

/**    state = {
        user: {
            email: '',
            password:''

        }
    }
    
    handleEmailChance = ({target}) => {
        const { email, value } = target;
        const { user } =  this.state
        this.setState( email, () => {
            user.email = value;
        });
    }

    handlePasswordChange = ({target}) => {
        const { password, value } = target;
        const { user } =   this.state;
        
        this.setState(password, () => {
            user.password = value;
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const { user } = this.state;
        console.log(this.state.user)
        try {
            console.log(user)
            const { data } = await login(user );            
            return data;
        } catch (error) {            
            console.log('Error', error);
        }
    }
       
 */       


constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
    this.state = {
        
        user: {
            email: undefined,
            password: undefined,
            
    }}
}

//Subimite do formulario
handleSubmit(e) {
    e.preventDefault();
    let dataToSend = {
        user: {
            email: this.state.email,
            password: this.state.password
        }
        
    };
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
                                        <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Login</button>
                                    <small id="emailHelp" className="form-text text-muted">If you are not registered. Plese <a href="/signup" data-toggle="modal" data-target="#signupModel" data-whatever="@mdo" >Signup</a></small>
                                    <br />
                                    
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