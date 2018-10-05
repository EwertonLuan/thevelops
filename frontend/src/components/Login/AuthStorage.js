import config from "./../../config"
import {verify} from './../User/API'
import jwt from 'jsonwebtoken'

const TOKEN = config.TOKEN

const setAuthToken = (token) => {
	localStorage.setItem(TOKEN, token)
}

const getAuthToken = () => {
	return localStorage.getItem(TOKEN)

}

const returnPayloadId = () => {
	const payload =jwt.decode(localStorage.getItem(TOKEN))
	console.log(payload)
	return payload.id
}

const isLoggedIn = () => {
	// return !!localStorage.getItem(TOKEN)
	
		console.log("Ta vendo a validet")
		console.log(localStorage.getItem(TOKEN))
		const get_token = localStorage.getItem(TOKEN) 
		if(get_token === null ){
			console.log('ta falando q  não tem')
			
			
			return 
		}else{
			
						
			console.log("ta no else")	
			//envia o token para validaxao
			const validet =  verify(get_token)
			console.log("primeiro " + validet)	
			if (validet === true){
				console.log("else" + validet)
				return validet
			}else{
				console.log("else" + validet)
				
				return validet
			}
		}
	}
	
	


const clearAuthToken = () => {

	return localStorage.removeItem(TOKEN)
}

export {
	returnPayloadId,
	setAuthToken,
	getAuthToken,
	isLoggedIn,
	clearAuthToken
}