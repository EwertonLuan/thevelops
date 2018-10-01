import axios from 'axios';

export const findAll = async () => await axios.get('http://localhost:5000/api/users/');
export const create = async (email, first_name, last_name, personal_phone, password) => await axios.post('http://localhost:5000/api/users/signup/', { email, first_name, last_name, personal_phone, password });
export const remove = async (id) => await axios.delete(`http://localhost:5000/api/users/${id}`);
