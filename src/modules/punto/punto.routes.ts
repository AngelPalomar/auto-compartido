import express from 'express';
import { get, post, put, del } from './punto.controller';

const api = express.Router();

api.get('/puntos', get);
api.post('/puntos', post);
api.put('/puntos/:id', put);
api.delete('/puntos/:id', del);

export default api;