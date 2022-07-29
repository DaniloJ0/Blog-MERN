import { Router } from "express";
import * as categoryController from '../controllers/category_controller.js'

const router = Router()

router.get('/', categoryController.getCategory)
router.post('/', categoryController.createCategory)

export default router


