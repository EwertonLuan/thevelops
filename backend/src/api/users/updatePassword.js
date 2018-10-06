import User from '../../models/User'
import bcrypt from 'bcrypt'
import config from '../../config'



export default async (req, res) => {
    const { id } = req.params;
    const {password} = req.body

    //Cria o salt para passa depois poder criar a senha
    const salt = await bcrypt.genSaltSync(config.JWT_SALT)
    
    //cria a senha cripitografada 
    const password_chan = await bcrypt.hashSync(password, salt)
    
    try {
        //Finds a user by id and update the password
        
        result = await User.findByIdAndUpdate(id, { password: password_chan
     }, { new: true }, function (err, tank) {
        if (err) return console.log(err);
        res.send(tank);
      });     
        
    } catch (error) {
        return error
    }
}
