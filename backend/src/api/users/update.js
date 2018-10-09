import User from '../../models/User';
import joi from 'joi'
import JoiUpdate from './../../models/JoiUpdate'
export default async (req, res, next) => {
	
	// console.log(req.body)
	
	
	
	
	
	const { id } = req.params;
    
	try 
	{   

		const ratings = await JoiUpdate.validate(req.body)

		if(ratings.error) throw (ratings.error.message)
		
		/** Receive data for update users */

		const new_datas = req.body;

		

			await User.findByIdAndUpdate(id, {
			email: new_datas.email,
			first_name: new_datas.first_name,
			last_name: new_datas.last_name,
			personal_phone: new_datas.personal_phone
		}, { new: false }, function (tank) {
           
			res.send(tank);
		});           
	} catch (error) {
		
		
		return res.send(error);
	}
};
