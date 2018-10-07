
import React, { Component } from 'react';
import { create } from './API';
import { withRouter } from 'react-router-dom';
import {login} from './API'
import config from '../../config';



class NewUser extends Component {
    state = {
        user: {
            email: null,
            first_name: null,
            last_name: null,
            personal_phone: null,
            password:null,
            
        },
        success:false,
        password_confirm:null,
        validate_pass: null,
        error: undefined
        
        
    }
    /** Watch the changes in the field input Email*/
    hanleEmailChange = ({ target }) => {
        const { email, value } = target;
        const { user } =  this.state;
        this.setState( email, () => {
            user.email = value;
        });
        
    }
    /** Watch the changes in the field First Name*/
    hanleFirstChange = ({ target }) => {
        const { first_name, value } = target;
        const { user } = this.state;
        this.setState( first_name, () => {
            user.first_name = value;
        });
        
    }
    
    /** Watch the changes in the field Last name*/
    hanleLastChange = ({ target }) => {
        const { last_name, value } = target;
        const { user } =   this.state;
        this.setState( last_name, () => {
            user.last_name = value;
        });
        
    } 

    /** Watch the changes in the field Password change*/
    hanlePasswordChange = ({ target }) => {
        const { password, value } = target;
        const { user } =   this.state;
        
        this.setState(password, () => {
            user.password = value;
        });
        
    }

    /** Watch the changes in the field Password confirm*/
    hanlePasswordConfirmChange = ({ target }) => {
        const { password_confirm, value } = target;
        const { user } =   this.state;
        
        this.setState(password_confirm, () => {
            user.password_confirm = value;
        });
    }
    /** Watch the changes in the field Personal Phone*/
    handlePersonalPhoneChange = ({ target }) => {
        const { personal_phone, value } = target;
        const { user } = this.state;
        this.setState(personal_phone, () =>{
            user.personal_phone = value
            
        })
        
    }
    /** Validation Password*/
     validarSenha = () => {
        const change = this.state.user
        if(change.password === change.password_confirm){
            this.setState({
                validate_pass: true
            })
        }else{
            this.setState({
                validate_pass: false
            })
            alert("The password are not the same")
            return 
        }
    }

    rediRedct() {
            window.location.href=config.URL_LOCAL+"/user"
        }
    
    /** Submit form */    
    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, first_name, last_name, personal_phone, password } = this.state.user;
        
        this.validarSenha()
        try{
            if(email === null ||
                first_name === null ||
                last_name, personal_phone === null ||
                password === null ){
                    alert("You must fill in all fields")
                    return
            } else if(this.state.validate_pass === false){
                return 
            }else{ 
            
                const { data } = await create(email, first_name, last_name, personal_phone, password );
                this.setState({success:true})
                
                if(this.state.success) login(email, password)
                
                this.rediRedct()

                return data;
            }
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
                                <div className="page-header">
                                    <h1>Login</h1>
                                </div>
                                <div className="form-group">
                                    <label >Email </label>
                                    <input required type="email" onChange={this.hanleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">First Name</label>
                                    <input required type="text" onChange={this.hanleFirstChange} className="form-control" id="firstname" aria-describedby="firshelp" placeholder="First name" />
                                </div>
                                <div className="form-group">
                                    <label >Last Name</label>
                                    <input required type="text" onChange={this.hanleLastChange} className="form-control" id="lastname" aria-describedby="lasthelp" placeholder=" Last name" />
                                </div>
                                <div className="form-group">
                                    <label >Personal Phone</label>
                                    <input required type="phone" data-mask="(00) 00000-0000" data-mask-selectonfocus="true" onChange={this.handlePersonalPhoneChange} className="form-control" id="personaphone" aria-describedby="phoneHelp" placeholder="Personal Phome" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input required type="password" onChange={this.hanlePasswordChange} className="form-control" id="password-form" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label> Confirm Password</label>
                                    <input required type="password" onChange={this.hanlePasswordConfirmChange} className="form-control" id="Password-confirm" placeholder="Confirm password" />
                                </div>
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-secondary btn-block">Login</button>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"/>
                 
            </div>
           

    )}
}

export default withRouter(NewUser)