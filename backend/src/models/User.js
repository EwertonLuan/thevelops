import joi from 'joi';
import mongoose from 'mongoose';

const joigoose_mon = require('joigoose')(mongoose);

//creat the object with joi for validate
const UserJoi = joi.object({
	email: joi.string().email().required(),
	first_name: joi.string().required(),
	last_name: joi.string().required(),
	personal_phone: joi.string().required(),
	password: joi.string().required()
});

//Convert the UserJoi for a mongoose schema
const User = new mongoose.Schema(joigoose_mon.convert(UserJoi));

export default mongoose.model('User', User);