import User from './../../models/User';

export default async (req, res) => {
    const user = new User(req.body);
    try {
        const result = await user.save();
        return res.status(201).json({ user: result });
    } catch (error) {
        return res.status(500).json({ error });
    }
}