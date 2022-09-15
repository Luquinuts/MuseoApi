import conexion from "../DB/DB";

export const GuiaRegister = async(req, res) =>{
    try {
        /************************************************************/
        let IdUsuario;
        const [response] = await conexion.query("SELECT INTO `usuario`(`dni`) WHERE `dni`=(?)",
        {
            replacements: [req.body.dni],
        })
        if () {

        }
        /************************************************************/
        await conexion.query("INSERT INTO `guia`(`idUsuario`) VALUES (?,?,?)",
        {
            replacements: [IdUsuario],
        });
        /************************************************************/
        await conexion.query("SELECT INTO `idiomaguia`(`idIdioma`)  WHERE `idioma`=(?)",
        {
            replacements: [req.body.idioma],
        });

        res.status(201).json({msg: "+"});
    } catch (error) {
        console.log(error.message);
    }
}
