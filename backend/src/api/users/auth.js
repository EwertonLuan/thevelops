import User from '../../models/User';
import jwt from 'jsonwebtoken'
import config from './../../config'
import bcrypt from 'bcrypt'

export default async (req, res, next) => {
    console.log("antes da variavel sem o user " + req.body)
    const { email, password} = req.body.user;
    console.log("Apos a variavel e vom user " + password)
    console.log(email) 
    
    try {
        //Verificar se realmente foi enviado um email e senha
        if( email === undefined || password === undefined ){
            console.log("entrou no if")
            res.status(401).json({
                success: false,
                code: 'DD101_API_ERROR_01',
                message: "E-mail and/or password invalid."
            });
        }else{
        console.log("chegou no else")
        //Encontra um usuario por email
        const result = await User.findOne({email})
        
        /*
        confirma se o email foi encontrado
        compara a senha enciada com a senha no banco
        gerar um token com o email  
        */
       console.log(result)
       console.log(password)
        if (result !== null && bcrypt.compareSync(password, result.password)){
            const id = result._id
            console.log(id)
            const tokenData = {                    
                    email,
                    id,
                }        
            const generatedToken = jwt.sign(tokenData, config.JWT_KEY);
            res.json({
                success: true,
                token: generatedToken
                })
            }else{
                res.status(401).json({
                    success: false,
                    code: 'DD101_API_ERROR_02',
                    message: 'User does not exists.'
                })
            }
        }
    } catch (error) {
        return res.status(500).json({ error: 'Senha invalida' });
    }
}