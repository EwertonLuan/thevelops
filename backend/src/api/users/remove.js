import User from '../../models/User';

export default async (req, res) => {
	const { id } = req.params;
	try {
		//Finds a user by id and remove
		await User.findByIdAndRemove(id);
		return res.status(204).end();
	} catch (error) {
		return res.status(500).json({ error });
	}
};