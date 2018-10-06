import config from "./../../config"
import {verify} from './../User/API'
import jwt from 'jsonwebtoken'

const TOKEN = config.TOKEN

const setAuthToken = (token) => {
	localStorage.setItem(TOKEN, token)
}

const returnPayloadId = () => {
	if(localStorage.getItem(TOKEN)){
	const payload =jwt.decode(localStorage.getItem(TOKEN))
	
	return payload.id}else{
		return
	}
}
const returnPayloadEmail = () => {
	const payload =jwt.decode(localStorage.getItem(TOKEN))
	
	return payload.email
}

const isLoggedIn = () => {
				
		return !! localStorage.getItem(TOKEN)	
			
}

const clearAuthToken = () => {

	return localStorage.removeItem(TOKEN)
}

export {
	returnPayloadId,
	setAuthToken,
	isLoggedIn,
	clearAuthToken,
	returnPayloadEmail
}