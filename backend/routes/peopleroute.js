import express from "express";
import {
    getPeoples,
    getPeopleById,
    createPeople,
    updatePeople,
    deletePeople
} from "../controllers/peoplecontroller.js";

const routerp = express.Router();

routerp.get('/peoples', getPeoples);
routerp.get('/people/:id', getPeopleById);
routerp.post('/people', createPeople);
routerp.put('/people/:id', updatePeople);
routerp.delete('/people/:id', deletePeople);

export default routerp;