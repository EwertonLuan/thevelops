
import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import {returnPayloadId} from './../Login/AuthStorage'
import {updatePassword} from './API'
import {returnPayloadEmail} from './../Login/AuthStorage'
import config from './../../config'



class EditUser extends Component {

    
    state = {
        user:{
        password:'',
        password_old:'',
        password_confirm:''

        },
        logged: false,
        error:''
    }


    hanlePasswordChange = ({ target }) => {
        const { password_old, value } = target;
        const { user } =   this.state;
        
        this.setState(password_old, () => {
            user.password_old = value;
        });
        
    }

    hanlePasswordChangeNew = ({ target }) => {
        const { password, value } = target;
        const { user } =   this.state;
        
        this.setState(password, () => {
            user.password = value;
        });
        
    }

    hanlePasswordConfirmChange = ({ target }) => {
        const { password_confirm, value } = target;
        const { user } =   this.state;
        
        this.setState(password_confirm, () => {
            user.password_confirm = value;
        });
    }

    //Redirect the user for GET user page
    redirectPage() {
        window.location.href = config.URL_LOCAL+'/user'
        
    }


    
    handleSubmit = async (e) => {
        e.preventDefault();
        const email_send = returnPayloadEmail()
        const { password } = this.state.user;
         //Dates to Login
         let dataToSend = {
            user: {
                email: email_send,
                password: this.state.user.password_old
            }
        }
        // console.log(dataToSend)
        if(dataToSend.user.email === undefined || dataToSend.user.password === undefined){
            return alert("Campos obrigatorios de Senha")
        }else{ 
        console.log(JSON.stringify(dataToSend))
        //URL for authentication
        let url = 'http://localhost:4000/api/users/auth'


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
                    
                    this.setState({
                        logged: true,
                        error: undefined
                    })
                    //Page Reload
                    // this.reloadPage()
                    // window.location.reload()
                }else{
                   alert("Password invalid")
                }
            }).catch(err => this.setState({ error: err }))
        }
        
                
        try {
            if(this.state.logged){
            const payloadId = returnPayloadId()
            console.log("entrou no creat do ID")
            console.log("essa é a senha "+ password)
            const { data } = await updatePassword(payloadId,password);
            
            
            window.location.href = "http://localhost:3000/user"
            return data;}
        } catch (error) {
            
             return error
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
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={this.hanlePasswordChange} className="form-control" id="password" placeholder="Old Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">New Password</label>
                                    <input type="password" onChange={this.hanlePasswordChangeNew} className="form-control" id="password-new" placeholder="New Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"> Confirm Password</label>
                                    <input type="password" onChange={this.hanlePasswordConfirmChange} className="form-control" id="password-confirm" placeholder="Confirnm Password"/>
                                </div>
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Submite</button>
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

export default withRouter(EditUser)