import usuarioModels from '../models/usuarioModel.js';
const consulta = (req, res) => 
{
    res.render('autenticacion/consulta', {
        csrfToken: req.csrfToken()
    })
};

const registro = (req, res) => {
    console.log(req.body)

    // guardar los registros en el localStorage
    const { nombre, apellido, email, password } = req.body

    const usuario = {
        nombre,
        apellido,
        email,
        password
    }

    usuarioModels.registro(usuario)

}
export {
    consulta
}