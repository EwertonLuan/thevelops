
import React, { Component } from 'react';
import { create } from './API';
import { withRouter } from 'react-router-dom';


class NewUser extends Component {
    state = {
        user: {
            email: '',
            first_name: '',
            last_name: '',
            personal_phone: '',
            password:'',
        }
    }
    hanleEmailChange = ({ target }) => {
        const { email, value } = target;
        const { user } =  this.state;
        this.setState( email, () => {
            user.email = value;
        });
        
    }
    hanleFirstChange = ({ target }) => {
        const { first_name, value } = target;
        const { user } = this.state;
        this.setState( first_name, () => {
            user.first_name = value;
        });
        
    }

    hanleLastChange = ({ target }) => {
        const { last_name, value } = target;
        const { user } =   this.state;
        this.setState( last_name, () => {
            user.last_name = value;
        });
        

    }
    hanlePasswordChange = ({ target }) => {
        const { password, value } = target;
        const { user } =   this.state;
        
        this.setState(password, () => {
            user.password = value;
        });
        
    }
    // hanlePasswordConfirmChange = ({ target }) => {
    //     const { password_confirm, value } = target;
    //     const { user } =   this.state;
        
    //     this.setState(password_confirm, () => {
    //         user.password_confirm = value;
    //     });
    // }

    handlePersonalPhoneChange = ({ target }) => {
        const { personal_phone, value } = target;
        const { user } = this.state;
        this.setState(personal_phone, () =>{
            user.personal_phone = value
            
        })
        
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, first_name, last_name, personal_phone, password } = this.state.user;
        console.log(this.state.user)
        try {
            console.log("entrou no creat")
            const { data } = await create(email, first_name, last_name, personal_phone, password );            
            return data;
        } catch (error) {            
            console.log('Error', error);
        }
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
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" onChange={this.hanleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Firt Name</label>
                                    <input type="text" onChange={this.hanleFirstChange} className="form-control" id="firstname" aria-describedby="firshelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input type="text" onChange={this.hanleLastChange} className="form-control" id="lastname" aria-describedby="lasthelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label >Personal Phone</label>
                                    <input type="text" onChange={this.handlePersonalPhoneChange} className="form-control" id="personaphone" aria-describedby="phoneHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={this.hanlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"> Confirm Password</label>
                                    <input type="password" onChange={this.hanlePasswordConfirmChange} className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                </div> */}
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Login</button>
                                <br />
                                
                            </form>


                        </div>
                    </div>

                </div>
                <div className="col">
                </div>
            </div>

    )}
}

export default withRouter(NewUser)