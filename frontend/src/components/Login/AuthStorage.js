import config from "./../../config";
import jwt from 'jsonwebtoken';

const TOKEN = config.TOKEN;

const setAuthToken = (token) => {
	localStorage.setItem(TOKEN, token);
};

/**Get Token in localStorage and return ID */
const returnPayloadId = () => {
	if(localStorage.getItem(TOKEN)){
		const payload =jwt.decode(localStorage.getItem(TOKEN));
		return payload.id;
	}else{
		return;
	}
};
/**Get Token in localStorage and return email */
const returnPayloadEmail = () => {
	const payload =jwt.decode(localStorage.getItem(TOKEN));
	return payload.email;
};

/**Verify localStorage and get token, if don't have redirect for "/" */
const isLoggedIn = () => {
	return localStorage.getItem(TOKEN);	
};

/**Delete token */
const clearAuthToken = () => {
	return localStorage.removeItem(TOKEN);
};

export {
	returnPayloadId,
	setAuthToken,
	isLoggedIn,
	clearAuthToken,
	returnPayloadEmail
};