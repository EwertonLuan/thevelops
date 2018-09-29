import User from './../../models/User';

export default async (req, res) => {
    const { id } = req.params;
    
    try {
        result = await User.findByIdAndUpdate(id, req.body,
            {new:true},
            (err, todo) => {
                if (err) return res.status(500).send(err)
                return res.send(todo)
            }
            );
        
    } catch (error) {
        return res.status(500).json({ error });
    }
}
