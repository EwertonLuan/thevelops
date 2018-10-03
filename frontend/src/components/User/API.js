import axios from 'axios';

export const findAll = async () => await axios.get('http://localhost:4000/api/users/');
export const create = async (email, first_name, last_name, personal_phone, password) => await axios.post('http://localhost:4000/api/users/', { email, first_name, last_name, personal_phone, password });
export const remove = async (id) => await axios.delete(`http://localhost:4000/api/users/${id}`);
export const login = async () => await axios.post('http://localhost:4000/api/users/auth/')