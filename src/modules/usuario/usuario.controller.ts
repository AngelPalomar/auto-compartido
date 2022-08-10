import { Request, Response } from 'express';
import Usuario from './usuario.model';
import { BaseResponse } from '../../interfaces/BaseResponse';
import Rol from '../rol/rol.model';

const response: BaseResponse = {};

//GET
export async function get(_: Request, res: Response): Promise<Response> {
    const usuarios: Usuario[] = await Usuario.findAll();

    response.status = 1;
    response.message = "Mostrando usuarios";
    response.data = usuarios;

    return res.status(200).send(response);
}

//GET: ID
export async function getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuario: Usuario | null = await Usuario.findByPk(id, { include: Rol });

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

        return res.status(200).send(response);
    } catch (error: any) {
        response.status = 0;
        response.message = "Ocurrió un error.";
        response.data = error;

        return res.status(500).send(response);
    }
}

export async function put(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
        await Usuario.update({ ...req.body }, { where: { id } });
        const updatedUsuario: Usuario | null = await Usuario.findByPk(id);

        response.status = 1;
        response.message = "Usuario modificado.";
        response.data = updatedUsuario;

        return res.status(200).send(response);
    } catch (error: any) {
        response.status = 0;
        response.message = "Ocurrió un error.";
        response.data = error;

        return res.status(500).send(error);
    }
}

export async function del(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const usuario: Usuario | null = await Usuario.findByPk(id);

    if (!usuario) {
        response.status = 0;
        response.message = "Usuario no encontrado.";
        response.data = usuario;

        return res.status(404).send(response);
    } else {
        await Usuario.destroy({ where: { id } });

        response.status = 1;
        response.message = "Usuario eliminado.";
        response.data = usuario;

        return res.status(200).send(response);
    }
}