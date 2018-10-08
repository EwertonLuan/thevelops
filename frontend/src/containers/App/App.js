import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {isLoggedIn} from './../../components/Login/AuthStorage';
import NewUser from '../../components/User/NewUser';
import Login from './../../components/Login/Login';
import GetUSer from './../../components/User/GetUser';
import EditUser from './../../components/User/EditUser';
import EditPassword from './../../components/User/EditPassword';


// import 'bootstrap/dist/css/bootstrap.css';
/** If the user don't have token for access he'll go redirect for  login page 
 *  If the user have token for access he 'll go redirect for get user page 
   */
class App extends Component {
  
	render() {
		return (

			<div className="App">

				<Router>
					<div>
						<Route exact path="/"render={ () => (isLoggedIn() ? <Redirect to="/user" /> : <Login/> ) }/>
						<Route exact path="/signup" component={NewUser}></Route>
						<Route exact path="/user" render={ () => (!isLoggedIn() ? <Redirect to="/" /> : <GetUSer/> ) }/>
						<Route exact path="/user/edit" render={ () => ( !isLoggedIn() ? <Redirect to="/" /> : <EditUser/> ) }/>
						<Route exact path="/user/edit_password" render={ () => ( !isLoggedIn() ? <Redirect to="/" />:<EditPassword/> )}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
