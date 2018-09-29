import mongoose from 'mongoose';

const User = new mongoose.Schema({
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    personal_phone: { type: Number, required: true },
    password: { type: String, required: true },
});

export default mongoose.model('User', User);