import config from '../../config'
import jwt from 'jsonwebtoken'


export default async (req, res) => {
    try {

        //salva o token no header em uma variavel

        const token = req.headers['authorization'].split(' ')[1]
        
        //Verifica se o token é valido
        jwt.verify(token, config.JWT_KEY, (err, decode) => {
            if(!err){
                res.json({
                    success: true,
                    message: 'Token is valid.'
                });
            } else {
            console.log('so nos erros')
                res.status(401).json({
                    success: false,
                    error: err
                });
            }
        })

    } catch (error) {
        console.log('Ta feio a coisa na autenticação')
        return res.status(500).json({ error });
    }
}