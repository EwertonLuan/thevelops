import React, { Component } from 'react';
import { create } from './API';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';


class NewUser extends Component {
    state = {
        user: {
            email: '',
            first_name: '',
            last_name: '',
            personal_phone: '',
            password:''
        }
    }
    onEmailChange = ({ target }) => {
        const { email, value } = target;
        const { user } =  this.state;
        this.setState( email, () => {
            user.email = value;
        });
        
    }
    onFirstChange = ({ target }) => {
        const { first_name, value } = target;
        const { user } = this.state;
        this.setState( first_name, () => {
            user.first_name = value;
        });
        
    }

    onLastChange = ({ target }) => {
        const { last_name, value } = target;
        const { user } =   this.state;
        this.setState( last_name, () => {
            user.last_name = value;
        });
        

    }
    onChange_password = ({ target }) => {
        const { password, value } = target;
        const { user } =   this.state;
        
        this.setState(password, () => {
            user.password = value;
        });
        
    }

    onPersonalPhoneChange = ({ target }) => {
        const { personal_phone, value } = target;
        const { user } = this.state;
        this.setState(personal_phone, () =>{
            user.personal_phone = value
            
        })
        
    }

    onSubmit = async (e) => {
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
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <Form>
                            <FormGroup>
                                <Label> email:</Label>
                                <Input type="text" name="email" onChange={this.onEmailChange} placeholder="Enter a user email" />
                            </FormGroup>
                            <FormGroup>
                                <Label> First:</Label>
                                <Input type="text" name="first_name" onChange={this.onFirstChange} placeholder="Enter a user firt" />
                            </FormGroup>
                            <FormGroup>
                                <Label> Last:</Label>
                                <Input type="text" name="first_last" onChange={this.onLastChange} placeholder="Enter a user last" />
                            </FormGroup>
                            <FormGroup>
                                <Label> Phone:</Label>
                                <Input type="text" name="phone" onChange={this.onPersonalPhoneChange} placeholder="Enter a user phone" />
                            </FormGroup>                             
                            <FormGroup>
                                <Label> Password:</Label>
                                <Input type="password" name="password" onChange={this.onChange_password} placeholder="Enter a user password" />
                            </FormGroup>
                            <FormGroup>
                                <Link to="/home">
                                    <Button action="/home" color="primary" onClick={this.onSubmit}>Create new Bill</Button>
                                </Link>
                                <Link to="/users" className="btn btn-secondary">Back to list</Link>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(NewUser)