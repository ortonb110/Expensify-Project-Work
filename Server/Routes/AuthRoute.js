import express from "express";
import { register, login, updateUser } from "../Controllers/AuthController.js";
import Auth from '../Middlewares/Auth.js'
const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/update').patch(Auth, updateUser)
export default router;