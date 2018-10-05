import User from '../../models/User'
import bcrypt from 'bcrypt'
import config from '../../config'



export default async (req, res) => {
    const { id } = req.params;
    const salt = bcrypt.genSaltSync(config.JWT_SALT)
    console.log(`aqui o puto$`)
    console.log(req.body)
    const password_chan = bcrypt.hashSync(req.body.password, salt)
    console.log(password_chan)
    try {
        //Finds a user by id and update
        
        result = await User.findByIdAndUpdate(id, { password: password_chan
     }, { new: true }, function (err, tank) {
        if (err) return console.log(err);
        res.send(tank);
      });     
        
    } catch (error) {
        return error
    }
}
