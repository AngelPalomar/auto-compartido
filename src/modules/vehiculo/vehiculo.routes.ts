import express from 'express';
import { del, get, post, put } from './vehiculo.controller';

const api = express.Router();

api.get('/vehiculos', get);
api.post('/vehiculos', post);
api.put('/vehiculos/:id', put);
api.delete('/vehiculos/:id', del);

export default api;