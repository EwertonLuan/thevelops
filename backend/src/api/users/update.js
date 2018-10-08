import User from '../../models/User';

export default async (req, res) => {
    
	const { id } = req.params;
    
	try 
	{   /** Receive data for update users */
		const new_datas = req.body;

		result = await User.findByIdAndUpdate(id, {
			email: new_datas.email,
			first_name: new_datas.first_name,
			last_name: new_datas.last_name,
			personal_phone: new_datas.personal_phone
		}, { new: false }, function (err, tank) {
           
			if (err) return console.log(err);
           
			res.send(tank);
		});   
            
	} catch (error) {
		return error;
	}
};
