import conexion from "../DB/DB.js";

export const registrarUsuarioAdmin = async(req, res) =>{
    try {
        /************************************************************/
        let IdUsuario;
        await conexion.query("INSERT INTO `usuario`(`dni`, `nombre`, `apellido`) VALUES (?,?,?)",
        {
            replacements: [req.body.dni, req.body.nombre, req.body.apellido],
        })
        .then(function (idUsuario)
            {
                IdUsuario = idUsuario[0];
            }
        );
        /************************************************************/
        await conexion.query("INSERT INTO `administrador`(`idUsuario`, `username`, `password`) VALUES (?,?,?)",
        {
            replacements: [IdUsuario, req.body.username, req.body.password],
        })
        res.status(201).json({msg: "+"});
        /************************************************************/
    } catch (error) {
        console.log(error.message);
    }
}

export const confirmarUsuarioAdmin = async(req, res) =>{
    try {
        const [response]= await conexion.query("SELECT  `token` FROM `administrador` WHERE `username`=(?) AND `password`=(?) ",
        {
            replacements: [[req.body.username],[req.body.password]],
        });
        res.status(200).json(response);
        console.log(JSON.stringify(response, null,1))

    } catch (error) {
        console.log(error.message);
    }
}