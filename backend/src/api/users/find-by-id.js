import User from '../../models/User';

export default async (req, res,) => {
    const { id } = req.params;
    try {
        /**Find a user by ID*/
        const result = await User.findById(id);
        return res.status(200).json({ users: result });
    } catch (error) {
        return res.status(500).json({ error });
    }
}