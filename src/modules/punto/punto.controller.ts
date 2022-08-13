import { Request, Response } from 'express';
import { BaseResponse } from '../../interfaces/BaseResponse';
import Punto from '../punto/punto.model';

const response: BaseResponse = {};

export async function get(req: Request, res: Response): Promise<Response> {
    const query = req.query;
    const puntos: Punto[] = await Punto.findAll({ where: query });

    response.status = 1;
    response.message = "Mostrando puntos";
    response.data = puntos;

    return res.status(200).send(response);
}

export async function post(req: Request, res: Response): Promise<Response> {
    try {
        const newPunto: Punto = await Punto.create({ ...req.body });

        response.status = 1;
        response.message = "Punto guardado.";
        response.data = newPunto;
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
    const punto: Punto | null = await Punto.findByPk(id);

    if (!punto) {
        response.status = 0;
        response.message = "Punto no encontrado.";
        response.data = punto;
        res.status(404);
    } else {
        try {
            await Punto.update({ ...req.body }, { where: { id: id } });
            const updatedPunto: Punto | null = await Punto.findByPk(id);

            response.status = 1;
            response.message = "Punto modificado.";
            response.data = updatedPunto;
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
    const punto: Punto | null = await Punto.findByPk(id);

    if (!punto) {
        response.status = 0;
        response.message = "Punto no encontrado.";
        response.data = punto;
        res.status(404);
    } else {
        try {
            await Punto.destroy({ where: { id: id } });
            response.status = 0;
            response.message = "Punto eliminado.";
            response.data = punto;
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