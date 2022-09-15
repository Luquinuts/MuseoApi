import conexion from "../DB/DB.js";

export const VisitaGuiadaRegister = async(req, res) =>{
    try {
        /************************************************************/
        let IdGuia;
        await conexion.query("SELECT INTO `guia` (`idGuia`) WHERE `idGuia`=(?)",
        {
            replacements: [req.body.idGuia],
        })
        .then( function (idGuia)
        {
            IdGuia = idGuia[0];
        }
        );
        /************************************************************/
        let IdRecorrido;
        await conexion.query("SELECT INTO `recorrido`(`idRecorrido`) WHERE `idRecorrido`=(?)",
        {
            replacements: [req.body.idRecorrido],
        })
        .then( function (idRecorrido)
        {
            IdRecorrido = idRecorrido[0];
        }
        );
        /************************************************************/
        await conexion.query("INSERT INTO `visitaguiada`(`fecha`, `hora`, `idRecorrido`, `idGuia`) VALUES (?)",
        {
            replacements: [req.body.fecha, req.body.hora, idRecorrido , IdGuia],
        });
        res.status(201).json({msg:"Idioma Registrado"});
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}