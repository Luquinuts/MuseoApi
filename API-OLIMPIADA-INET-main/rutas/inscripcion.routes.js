InscripcionCreate

import express from "express";
import {
    InscripcionCreate
} from "../controllers/inscripcion.controller.js";

const routerInscripcion = express.Router();

//POST
//routerA.post('/', );
routerInscripcion.post('/InscripcionCreate', InscripcionCreate );

//PATCH
//routerA.patch('/', );

export default routerInscripcion;