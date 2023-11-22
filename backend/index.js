import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import UserRouter from "./routes/userroute.js";
import PeopleRouter from "./routes/peopleroute.js";

dotenv.config();
const app = express();
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(UserRouter);
app.use(PeopleRouter);

app.listen(5000, ()=> console.log('Server up and running...'));