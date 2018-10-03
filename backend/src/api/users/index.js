import { Router } from 'express';
import findAll from './find-all';
import findOne from './find-by-id';
import create from './create';
import remove from './remove';
import update from './update';
import findUser from './find-one'
import auth from './auth';

const router = Router();

//GET http://localhost:9000/api/users/
router.get('/', findAll);
//GET http://localhost:9000/api/users/5bac1f4980701043b4bb0b80
router.get('/:id', findOne);
//POST http://localhost:9000/api/users/
router.post('/', create);
//DELETE http://localhost:9000/api/users/5bac1f4980701043b4bb0b80
router.delete('/:id', remove);
//PUT http://localhost:9000/api/users/5bac1f4980701043b4bb0b80
router.put('/:id', update);
//POST http://localhost:9000/api/users/auth
router.post('/auth', auth) 
//POST http://localhost:9000/api/users/login
router.post('/login', findUser)
export default router;