import { Router } from 'express';
import findAll from './find-all';
import findOne from './find-by-id';
import create from './create';
import remove from './remove';
import update from './update';
import findUser from './find-one'
import auth from './auth';
import verifyToken from './verify-token'
import updatePassword from './updatePassword'

const router = Router();

/**Route API for Verify the token validate */

//GET /users/verify
router.get('/verify', verifyToken)

/** Route API for show all uses in the  */

//GET /users/
router.get('/', findAll);

/**Find one by ID */

//GET /users/5bac1f4980701043b4bb0b80
router.get('/:id', findOne);

/**Create a new user (Signup) */

//POST /users/
router.post('/', create);

/** Delete a user by ID */

//DELETE /users/5bac1f4980701043b4bb0b80
router.delete('/:id', remove);

/**Update a user by ID*/

//PUT /users/5bac1f4980701043b4bb0b80
router.put('/:id', update);

/**Change the password after confirm current password*/

//PUT /users/5bac1f4980701043b4bb0b80/change
router.put('/:id/change', updatePassword);

/**Autentication route */

//POST /users/auth
router.post('/auth', auth) 


/**Login route */

//POST /users/login
router.post('/login', findUser)


export default router;