import express from "express";
import {
    VisitanteRegister
 } from "../controllers/visitante.contoller.js";

const routerG = express.Router();

//POST
//routerA.post('/', );
routerG.post('/VisitanteRegister', VisitanteRegister );
routerG.post('/', );

//PATCH
//routerA.patch('/', );

export default routerG;