import { Request, Response } from 'express';
import { BaseResponse } from '../../interfaces/BaseResponse';
import Punto from '../punto/punto.model';
import Ruta from './ruta.model';

const response: BaseResponse = {};

export async function get(req: Request, res: Response): Promise<Response> {
    const query = req.query;
    const rutas: Ruta[] = await Ruta.findAll({ where: query, include: Punto });

    response.status = 1;
    response.message = "Mostrando rutas";
    response.data = rutas;

    return res.status(200).send(response);
}

export async function post(req: Request, res: Response): Promise<Response> {
    try {
        const newRuta: Ruta = await Ruta.create({ ...req.body });

        response.status = 1;
        response.message = "Ruta guardada.";
        response.data = newRuta;
        res.status(200);
    } catch (error) {
        response.status = 1;
        response.message = "Ocurrió un error.";
        response.data = error;
        res.status(500);
    }

    return res.send(response);
}

export async function put(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const ruta: Ruta | null = await Ruta.findByPk(id);

    if (!ruta) {
        response.status = 0;
        response.message = "Ruta no encontrado.";
        response.data = ruta;
        res.status(404);
    } else {
        try {
            await Ruta.update({ ...req.body }, { where: { id: id } });
            const updatedRuta: Ruta | null = await Ruta.findByPk(id);

            response.status = 1;
            response.message = "Ruta modificada.";
            response.data = updatedRuta;
            res.status(200);

        } catch (error) {
            response.status = 0;
            response.message = "Ocurrió un error.";
            response.data = error;
            res.status(500);
        }
    }

    return res.send(response);
}

export async function del(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const ruta: Ruta | null = await Ruta.findByPk(id);

    if (!ruta) {
        response.status = 0;
        response.message = "Ruta no encontrada.";
        response.data = ruta;
        res.status(404);
    } else {
        try {
            await Ruta.destroy({ where: { id: id } });
            response.status = 0;
            response.message = "Ruta eliminada.";
            response.data = ruta;
            res.status(200);
        } catch (error) {
            response.status = 0;
            response.message = "Ocurrió un error.";
            response.data = error;
            res.status(404);
        }
    }

    return res.send(response);
}