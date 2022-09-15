import express from "express";
import {
    VisitaGuiadaRegister
} from "../controllers/visita.guiada.controller";

const routerVG = express.Router();

//POST
//routerI.post('/', );
routerVG.post('/VisitaGuiadaRegister/', VisitaGuiadaRegister );

export default routerVG;