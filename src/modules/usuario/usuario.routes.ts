import express from 'express';
import { get, getById, post, put, del } from './usuario.controller';

const api = express.Router();

api.get('/usuarios', get);
api.get('/usuarios/:id', getById);
api.post('/usuarios', post);
api.put('/usuarios/:id', put);
api.delete('/usuarios/:id', del);

export default api;

