import express from 'express'
const router=express.Router();
import { login, registerController } from '../controllers/loginController.js';
router.post('/login',login)
router.post('/register', registerController);
export default router