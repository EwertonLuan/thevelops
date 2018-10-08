import config from '../../config';
import jwt from 'jsonwebtoken';


export default async (req, res) => {
	try {

		/**Save the toke in the Header*/

		const token = req.headers['authorization'].split(' ')[1];
        
		/**Validate Token, config.JWT_KEY it's your private key*/
		jwt.verify(token, config.JWT_KEY, (err, decode) => {
			if(!err){
				res.json({
					success: true,
					message: "Token is valid."
				});
			} else {
				res.status(401).json({
					success: false,
					error: err
				});
			}
		});

	} catch (error) {
        
		return res.status(500).json({ error });
	}
};