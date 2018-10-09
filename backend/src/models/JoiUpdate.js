
import joi from 'joi';

//creat the object with joi for validate
const JoiUpdate = joi.object({
	email: joi.string().email().required(),
	first_name: joi.string().required(),
	last_name: joi.string().required(),
	personal_phone: joi.string().regex(/\([0-9]{2}\)\s[0-9]{5}\-[0-9]{4}/).required(),
});

export default JoiUpdate