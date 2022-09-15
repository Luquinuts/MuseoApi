import express from "express";
import cors from "cors";
import routerA from "./rutas/RutasAdmin.js";
import routerI from "./rutas/RutasInstitucion.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routerA);
app.use(routerI);

app.listen(5000, ()=> console.log('Server up and running...'));