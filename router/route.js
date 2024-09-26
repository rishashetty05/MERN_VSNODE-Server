import express from 'express';
import { addUser, getUsers, getUser, editUser } from '../controller/user-controller.js';


const router = express.Router();

// router.post('/add', () => {
//     console.log("Hello");
// } )

router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.post('/:id', editUser);

export default router;