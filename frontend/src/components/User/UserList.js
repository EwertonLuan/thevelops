import React, { Component } from 'react';
import { findAll, remove } from './API';
import {
    Container,
    Row,
    Col,
    Table,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class UserList extends Component {
    state = {
        user: []
    }

    async componentDidMount() {
        const user = await this.onFindAll();
        this.setState({ user });
        
    }

    onFindAll = async () => {
        try {
            const { data } = await findAll();
            return data && data.user;
        } catch (error) {
            console.log('Error', error);
        }
    }

    onDelete = async (user1) => {
        try {
            await remove(user1._id);
            const user = await this.onFindAll();
            this.setState({ user });
        } catch (error) {
            console.log('Error', error);
        }
    }

    render() {
        const { user } = this.state;
        console.log()
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <Link to="/users/new" className="btn btn-primary mt-2 mb-2">Create new Bill</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>First</th>
                                    <th>last</th>
                                    <th>phone</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                { user.map((user1, index) => (
                                    <tr key={index}>
                                        <td>{user1.first_name}</td>
                                        <td>{user1.last_name}</td>
                                        <td>{user1.email}</td>
                                        <td>{user1.personal_phone}</td>
                                        <td>
                                            <Button color="danger" onClick={() => this.onDelete(user1)}>Delete</Button>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}