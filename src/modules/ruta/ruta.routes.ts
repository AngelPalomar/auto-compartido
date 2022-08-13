import express from 'express';
import { get, post, put, del } from './ruta.controller';

const api = express.Router();

api.get('/rutas', get);
api.post('/rutas', post);
api.put('/rutas/:id', put);
api.delete('/rutas/:id', del);

export default api;