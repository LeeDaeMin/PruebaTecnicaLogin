import jwt  from 'jsonwebtoken'

// generador del tocket de validacion para autenticar la cuenta

const generarJWT = datos => jwt.sign({ id: datos.id, nombre: datos.nombre }, process.env.JWT_SECTRET,{
        expiresIn: '1d'
    })


const generarId = () => Math.random().toString(32).substring(2) + Date.now().toString(32) 

export {
    generarJWT,
    generarId
}