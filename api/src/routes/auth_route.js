import * as userController from '../controllers/auth_controller.js'
import { Router } from "express";
const router = Router();

//Register
router.post('/register', userController.register)

// Login
router.post('/login', userController.login)


export default router;