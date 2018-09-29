import User from './../../models/User';
import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(10)

export default async (req, res) => {
    const user = new User(req.body);
    user.set('password', bcrypt.hashSync(user.password, salt))
    try {
        const result = await user.save();
        return res.status(201).json({ user: result });
    } catch (error) {
        return res.status(500).json({ error });
    }
}