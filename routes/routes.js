import express from 'express';

import {
  deleteUser, loginUser, registerUser, token, user,
} from '../controllers/users-controller.js';
import auth from '../middlewares/auth.js';

const { Router } = express;
const router = Router();

// All API routes definitions.
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.delete('/users/delete/:id', auth, deleteUser);
router.post('/users/token', token);
router.get('/users', auth, user);

export default router;
