import axios from 'axios';
import config from './../../config';
import {setAuthToken} from '../Login/AuthStorage';
const url = config.URL_API;

//REQUESTS WITH PUT
export const updatePassword = async (id, password) => await axios.put(`${url}/users/${id}/change`,{password});//UPDATE PASSWORD
export const findByIdAndUpdate = async (
	id,
	email,
	first_name,
	last_name,
	personal_phone) => await axios.put(`${url}/users/${id}`,{ email, first_name, last_name, personal_phone}); //UPDATE A USER

//REQUESTS WITH DELETE
export const remove = async (id) => await axios.delete(`${url}/users/${id}`);//REMOVE A USER BY ID

//REQUESTS WITH POST
export const login = async (emailAnPassword) => await axios.post(`${url}/users/auth/`,emailAnPassword)
	.then(response =>  {
  		if (response.data.success) {
			setAuthToken(response.data.token); 
			return response.data;			     
		}
	}).catch(err => {return err;});
 
export const create = async (
	email,
	first_name, 
	last_name, 
	personal_phone, 
	password
)  => await axios.post(`${url}/users/`, { email, first_name, last_name, personal_phone, password });// CREAT NEW USERS


//REQUESTS WITH GET
export const findByid = async (id) => await axios.get(`${url}/users/${id}`); //GET USERS BY ID

export const verify = async (
	token
) => await axios.get(`${url}/users/verify`,{
	headers: {
		uthorization: `Bearer ${token}`, //the token is a variable which holds the token
	}})
	.then(response => {
		// If request is good...
		console.log(response.data);
		return response.data.success;
	})
	.catch((error) => {
		return error.response.data.success;
	});  //VERIFY THE PASSWORD
