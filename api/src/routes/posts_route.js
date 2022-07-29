import * as postController from '../controllers/post_controller.js'
import { Router } from "express"

const router = Router()

router.post('/', postController.createPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)
router.get('/:id', postController.getPost)
router.get('/', postController.getAllPost)


export default router

