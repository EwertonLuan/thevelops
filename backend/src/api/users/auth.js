import User from '../../models/User';
import jwt from 'jsonwebtoken';
import config from './../../config';
import bcrypt from 'bcrypt';

export default async (req, res, next) => {

	/**email and password for validation login */
	const { email, password} = req.body.user;
        
	try {
		/**checks the value of the password and email*/
		if( email === undefined || password === undefined ){
            
			res.status(401).json({
				success: false,
				code: 'DD101_API_ERROR_01',
				message: "E-mail and/or password invalid."
			});
		}else{
        
			/**Find a user by email*/
			const result = await User.findOne({email});
        
			/**cheks if the email isn't null
         * compares the password sent whith databese password,
         * and finaly generates a token with the ID and email  
         */
       
			if (result !== null && bcrypt.compareSync(password, result.password)){
				const id = result._id;
				const tokenData = {                    
					email,
					id,
				};        
				const generatedToken = jwt.sign(tokenData, config.JWT_KEY);
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
		return res.status(500).json({ error: 'Invalid Password' });
	}
};