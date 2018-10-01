import { Router } from 'express';
import findAll from './find-all';
import findOne from './find-one';
import create from './create';
import remove from './remove';
import update from './update';

const router = Router();

//GET http://localhost:9000/api/users/
router.get('/', findAll);
//GET http://localhost:9000/api/users/5bac1f4980701043b4bb0b80
router.get('/:id', findOne);
//POST http://localhost:9000/api/users/
router.post('/signup', create);
//DELETE http://localhost:9000/api/users/5bac1f4980701043b4bb0b80
router.delete('/:id', remove);
//PUT http://localhost:9000/api/users/5bac1f4980701043b4bb0b80
router.put('/:id', update);

export default router;