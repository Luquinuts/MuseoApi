import conexion from "../DB/DB.js";

export const InscripcionCreate = async(req, res) =>{
    try {
        /************************************************************/
        await conexion.query("INSERT INTO `inscripcion`(`idInscriptor`, `idVisitante`, `idVisitaGuiada`, `fecha`) VALUES (?, ?, ?, ?)",
        {
            replacements: [req.body.idInscriptor, req.body.idVisitante, req.body.idVisitaGuiada, req.body.fecha],
        });
        res.status(201).json({msg:"Inscripcion Registrado"});
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}