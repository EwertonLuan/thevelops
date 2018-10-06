import User from '../../models/User'
import bcrypt from 'bcrypt'
import config from '../../config'



export default async (req, res) => {
    const { id } = req.params;
    const password_new = req.body
    
    console.log("esssa é a senha "+password_new.password_new)
    console.log(req.body)
    //Cria o salt para passa depois poder criar a senha
    const salt = await bcrypt.genSaltSync(config.JWT_SALT)
    
    //cria a senha cripitografada 
    const password_chan = await bcrypt.hashSync(password_new.password_new, salt)
    
    try {
        //Finds a user by id and update the password
        console.log("um passo do paraiso "+ password_chan +" a " + id)
        result = await User.findByIdAndUpdate(id, { password: password_chan
     }, { new: true }, function (err, tank) {
        if (err) return console.log(err);
        res.send(tank);
      });     
        
    } catch (error) {
        return error
    }
}
