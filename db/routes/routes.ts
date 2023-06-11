import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/user.controller.js";

const router = Router();

router.get     ('/consult',  getUsers)
router.post    ('/create',    postUser)
router.get     ('/consult/:cc', getUser)
router.put     ('/edit/:cc', putUser)
router.delete  ('/consult/:cc', deleteUser)


export default router;
