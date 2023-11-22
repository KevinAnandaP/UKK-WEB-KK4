import express from "express";
import {
    getUsers,
    Register,
    Login,
    Logout
} from "../controllers/usercontroller.js";
import { verifyToken } from "../middleware/verifytoken.js";
import { refreshToken } from "../controllers/refreshtoken.js";

const routeru = express.Router();

routeru.get('/users', verifyToken, getUsers);
routeru.post('/register', Register);
routeru.post('/login', Login);
routeru.get('/token', refreshToken);
routeru.delete('/logout', Logout);

export default routeru;