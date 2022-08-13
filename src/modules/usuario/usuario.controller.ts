import { Request, Response } from 'express';
import { BaseResponse } from '../../interfaces/BaseResponse';
import Usuario from './usuario.model';
import Rol from '../rol/rol.model';
import Vehiculo from '../vehiculo/vehiculo.model';
import Ruta from '../ruta/ruta.model';

const response: BaseResponse = {};

//GET
export async function get(req: Request, res: Response): Promise<Response> {
    const query = req.query;
    const usuarios: Usuario[] | null = await Usuario.findAll({ where: query, include: [Vehiculo, Ruta] });

    response.status = 1;
    response.message = "Mostrando usuarios.";
    response.data = usuarios;

    return res.status(200).send(response);
}

//GET: ID
export async function getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuario: Usuario | null = await Usuario.findByPk(id, { include: [Rol, Vehiculo, Ruta] });

    if (!usuario) {
        response.status = 0;
        response.message = "Usuario no encontrado.";
        response.data = usuario;

        return res.status(404).send(response);
    } else {
        response.status = 1;
        response.message = "Usuario encontrado.";
        response.data = usuario;

        return res.status(200).send(response);
    }
}

export async function post(req: Request, res: Response): Promise<Response> {
    try {
        const usuario: Usuario = await Usuario.create({ ...req.body });

        response.status = 1;
        response.message = "Usuario creado.";
        response.data = usuario;
        res.status(200);

    } catch (error: any) {
        response.status = 0;
        response.message = "Ocurrió un error.";
        response.data = error;
        res.status(500);
    }

    return res.send(response);
}

export async function put(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuario: Usuario | null = await Usuario.findByPk(id);

    if (!usuario) {
        response.status = 1;
        response.message = "Usuario no encontrado.";
        response.data = usuario;
        res.status(404);
    } else {
        try {
            await Usuario.update({ ...req.body }, { where: { id } });
            const updatedUsuario: Usuario | null = await Usuario.findByPk(id);

            response.status = 1;
            response.message = "Usuario modificado.";
            response.data = updatedUsuario;
            res.status(200);

        } catch (error: any) {
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

    const usuario: Usuario | null = await Usuario.findByPk(id);

    if (!usuario) {
        response.status = 0;
        response.message = "Usuario no encontrado.";
        response.data = usuario;
        res.status(404)
    } else {
        await Usuario.destroy({ where: { id } });

        response.status = 1;
        response.message = "Usuario eliminado.";
        response.data = usuario;
        res.status(200)
    }

    return res.send(response);
}