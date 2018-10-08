import User from '../../models/User';
import jwt from 'jsonwebtoken';
import config from './../../config';
import bcrypt from 'bcrypt';

export default async (req, res, next) => {
	/**Receives a email and password */
	const { email, password } = req.body;
    
	try {
		/**Valid the password and email*/
		if( email === undefined || password === undefined ){
			res.status(401).json({
				success: false,
				code: 'DD101_API_ERROR_01',
				message: "E-mail and/or password invalid."
			});
		}else{
			/**Find a user by email*/
			const result = await User.findOne({email});
        
        
			/**Confirm if find the email,
         * Compare the password with the password in the database,
         * Generate a token with email
         * */
        
			if (result !== null && bcrypt.compareSync(password, result.password)){
            
				const tokenData = {                    
					email,
				};        
				const generatedToken = jwt.sign(tokenData, config.JWT_KEY, {  expiresIn: '1m'});
				res.json({
					success: true,
					token: generatedToken
				});
			}else{
				res.status(401).json({
					success: false,
					code: 'DD101_API_ERROR_02',
					message: 'User does not exists.'
				});
			}
		}
	} catch (error) {
		return res.status(500).json({ error: 'password invalid' });
	}
};       