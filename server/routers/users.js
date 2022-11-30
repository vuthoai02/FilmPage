import express from 'express';

import {getUser} from '../controllers/users.js';
import { login } from '../controllers/login.js';
import { register } from '../controllers/register.js';
import verifyToken from '../controllers/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken ,getUser);

// router.post('/', createUser);

router.post('/login', login);

router.post('/register', register);

export default router;