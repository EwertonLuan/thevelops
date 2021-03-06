import User from './../../models/User';
import bcrypt from 'bcrypt';
import config from './../../config';

/**hash salt for create a passwor encrypted */
const salt = bcrypt.genSaltSync(config.JWT_SALT);

export default async (req, res) => {

	/**creates a new schema with the data in the req*/
	const user = new User(req.body);

	/**create the hash password*/
	user.set('password', bcrypt.hashSync(user.password, salt));
	try {
		/**saves the user to the database */
		const result = await user.save();
		return res.status(201).json({ user: result });
	} catch (error) {
		return res.status(500).json({ error });
	}
};