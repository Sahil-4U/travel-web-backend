import express from "express";
import { UserController, singin } from "../controller/UserController.js";

const UserRoutes = express.Router();



UserRoutes.post('/singup', UserController);
UserRoutes.post('/singin', singin);



export default UserRoutes;