import User from '../../models/User';

export default async (req, res) => {
    try {
        /**Find all users in the database*/
        const result = await User.find({});
        return res.status(200).json({ user: result });
    } catch (error) {
        return res.status(500).json({ error });
    }
}