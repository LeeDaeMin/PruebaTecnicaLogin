import bycrypt from 'bcrypt';
const usuario = [
    {
        nombre: 'Luis',
        email: 'yiyoalmeida@hotmail.com',
        confirmado: 1,
        password: bycrypt.hashSync('password', 10)
    },

    {
        nombre: 'admin',
        email: 'admin@admin.com',
        confirmado: 1,
        password: bycrypt.hashSync('password', 10)
    }

]

export default usuario