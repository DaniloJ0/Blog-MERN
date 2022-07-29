import * as userController from '../controllers/user_controller.js'
import {Router} from "express";
const router = Router();

//Update
router.put('/:id', userController.updateUser)
//Delete
router.delete('/:id', userController.deleteUser)
//Get user
router.get('/:id', userController.getUser)



export default router;