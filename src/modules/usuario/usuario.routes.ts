import express from 'express';
import { get, getById, post } from './usuario.controller';

const api = express.Router();

api.get('/usuarios', get);
api.get('/usuarios/:id', getById);
api.post('/usuarios', post);

export default api;

