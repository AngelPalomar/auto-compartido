import { Request, Response } from 'express';
import { BaseResponse } from '../../interfaces/BaseResponse';
import Vehiculo from './vehiculo.model';

const response: BaseResponse = {};

export async function get(req: Request, res: Response): Promise<Response> {
    const query = req.query;
    const vehiculos: Vehiculo[] = await Vehiculo.findAll({ where: query });

    response.status = 1;
    response.message = "Mostrando vehículos";
    response.data = vehiculos;

    return res.status(200).send(response);
}

export async function post(req: Request, res: Response): Promise<Response> {
    try {
        const newVehiculo: Vehiculo = await Vehiculo.create({ ...req.body });

        response.status = 1;
        response.message = "Vehículo guardado.";
        response.data = newVehiculo;
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
    const vehiculo: Vehiculo | null = await Vehiculo.findByPk(id);

    if (!vehiculo) {
        response.status = 0;
        response.message = "Vehiculo no encontrado.";
        response.data = vehiculo;
        res.status(404);
    } else {
        try {
            await Vehiculo.update({ ...req.body }, { where: { id: id } });
            const updatedVehiculo: Vehiculo | null = await Vehiculo.findByPk(id);

            response.status = 1;
            response.message = "Vehiculo modificado.";
            response.data = updatedVehiculo;
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
    const vehiculo: Vehiculo | null = await Vehiculo.findByPk(id);

    if (!vehiculo) {
        response.status = 0;
        response.message = "Vehiculo no encontrado.";
        response.data = vehiculo;
        res.status(404);
    } else {
        try {
            await Vehiculo.destroy({ where: { id: id } });
            response.status = 0;
            response.message = "Vehiculo eliminado.";
            response.data = vehiculo;
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