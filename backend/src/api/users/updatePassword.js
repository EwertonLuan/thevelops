import User from '../../models/User';
import bcrypt from 'bcrypt';
import config from '../../config';


export default async (req, res) => {
	/**Reiceve a ID and a new password after do it login */
	const { id } = req.params;
	const password_new = req.body;
    
    
	const salt = await bcrypt.genSaltSync(config.JWT_SALT);
    
	/**Password with Hash */
	const password_chan = await bcrypt.hashSync(password_new.password, salt);
    
	try {
		//Finds a user by id and update the password
       
		result = await User.findByIdAndUpdate(id, { password: password_chan
		}, { new: true }, function (err, tank) {
			if (err) return console.log(err);
			res.send(tank);
		});     
        
	} catch (error) {
		return error;
	}
};
