import axios from 'axios';

const url = 'http://localhost:4000'

//REQUESTS WITH PUT
export const updatePassword = async (id, password) => await axios.put(`${url}/api/users/${id}/change`,{password});//UPDATE PASSWORD
export const findByIdAndUpdate = async (
  id,
  email,
  first_name,
  last_name,
  personal_phone) => await axios.put(`${url}/api/users/${id}`,{ email, first_name, last_name, personal_phone}); //UPDATE A USER



//REQUESTS WITH DELETE
export const remove = async (id) => await axios.delete(`${url}/api/users/${id}`);//REMOVE A USER BY ID

//REQUESTS WITH POST
  export const login = async (email,password) => await axios.post(`${url}/api/users/auth/`,{email, password})
  .then(response =>  {
  console.log(response.data.success)
  
  if (response.data.success) {
      
      return response.data.success
      // this.loadUsers()
  }
}).catch(err => console.log(err ))
 //LOGIN 

// let url = 'http://localhost:4000/api/users/auth';


//encaminha o post para o backend
// fetch(url, {
//     method: "POST",
//     body: JSON.stringify(dataToSend),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then(response => response.json())
//     .then(response => {
//         console.log(response)
//         if (response.success) {
//             localStorage.setItem('DD101_TOKEN', response.token);
            // this.setState({
            //     logged: true,
            //     error: undefined
            // })
            // this.loadUsers()
//         }
//     }).catch(err => this.setState({ error: err }));
// }

    
// }


export const create = async (
  email,
  first_name, 
  last_name, 
  personal_phone, 
  password
  )  => await axios.post(`${url}/api/users/`, { email, first_name, last_name, personal_phone, password });// CREAT NEW USERS



//REQUESTS WITH GET
export const findAll = async () => await axios.get(`${url}/api/users/`); //GET ALL USERS
export const findByid = async (id) => await axios.get(`${url}/api/users/${id}`); //GET USERS BY ID

export const verify = async (
    token
  ) => await axios.get(`${url}/api/users/verify`,{
    headers: {
              uthorization: `Bearer ${token}`, //the token is a variable which holds the token
              }})
              .then(response => {
                                  // If request is good...
                                  console.log(response.data)
                                  console.log("aqui é da api")
                                  return response.data.success
                                })
                                .catch((error) => {
                                  console.log("Deu ruim " + error.response.data.success)
                                  return error.response.data.success
                                })  //VERIFY THE PASSWORD
                                                 
//backend


