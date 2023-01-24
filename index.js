
// OTRA FORMA DE HACERLO

        /* import {createServer} from 'node:http';
        import router from './router.js';

        const server = createServer((req, res) => {
            res.writeHead(200, { 'Contend-Type' : 'text/html' })
            res.write('<h1>Ruta Normal</h1>')
            res.end()
        })

        server.use('/', router)


        server.listen(3000, function () {
            console.log(`Server is listening on port ${this.address().port}`)
        }) */

import express from 'express'
import csrf from  'csurf'
import cookieParser from 'cookie-parser'
import router from './routes/usuario'

const app = express()

app.use( express.urlencoded({extended: true}) )

app.use(cookieParser())

app.use(csrf({cookie: true}))

app.use( express.static('public'))

app.use('/', router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`servidor funcionando ${port}`)
});
