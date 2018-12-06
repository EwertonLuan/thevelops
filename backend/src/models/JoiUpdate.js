
import joi from 'joi';

//creat the object with joi for validate
const JoiUpdate = joi.object({
	email: joi.string().email().required().error(new Error('Incorrect e-mail, ex: example@outlook.com, please try again!')),
	first_name: joi.string().min(2).max(10).required(),
	last_name: joi.string().min(2).max(10).required(),
	personal_phone: joi.string().regex(/\([0-9]{2}\)\s[0-9]{5}\-[0-9]{4}/).required().error(new Error('Incorrect Personal Phone, ex: (13) 99999-9999, please try again!')),
});

export default JoiUpdate;