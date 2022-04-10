
import { Router } from "express"
import usersController  from '../controllers/users.controller'

const router = Router()


router.get("/",         usersController.getUsers)
router.get("/:id",      usersController.getUser)
router.post("/",        usersController.postUser)
router.put("/:id",      usersController.putUser)
router.delete("/:id",   usersController.deleteUser)

export default router

