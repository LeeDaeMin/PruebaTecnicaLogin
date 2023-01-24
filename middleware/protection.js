import jwt from 'jsonwebtoken'; 


const protection = async(req, res, next) => {

    const {_token } = req.cookies

    if(!_token){
        return res.redirect('/autenticacion/consulta')
    }

    try {
        const decoded = jwt.verify(_token, process.env.JWT_SECTRET)
        req.user = decoded.user

        if(!req.user){
            console.error('')
        }
        return next();
}
    catch (err) {
        console.error(err.message)
        return res.redirect('/autenticacion/consulta')
    }

};

export default protection;