import User from '../../models/User';

export default async (req, res) => {
    const { id } = req.params;
    
    try {
        //Finds a user by id and update
        // result = await User.findByIdAndUpdate(id, req.body,
        //     {new:true},
        //     (err, todo) => {
                
        //         if (err) return res.status(500).send(err)
        //         return res.send(todo)
        //     }
        console.log(req.body.email)
        const new_datas = req.body
        result = await User.findOneAndUpdate(id, {
            email: new_datas.email,
            first_name: new_datas.first_name,
            last_name: new_datas.last_name,
            personal_phone: new_datas.personal_phone
         }, { new: true }, function (err, tank) {
           if (err) return console.log(err);
           console.log(tank)
           res.send(tank);
        })   
            
            
        
    } catch (error) {
        return error;
    }
}
