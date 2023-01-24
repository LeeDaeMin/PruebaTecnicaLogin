import express from 'express';
import { consulta } from '../controllers/usuarioController';
const router = express.Router();

router.get('/consulta', consulta);

export default router;