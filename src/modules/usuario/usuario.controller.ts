import { Request, Response } from 'express';
import Usuario from './usuario.model';

//TODO: Basic response
export async function get(_: Request, res: Response): Promise<Response> {
    const usuarios: Usuario[] = await Usuario.findAll();

    return res.status(200).send(usuarios);
}

export async function getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuario: Usuario | null = await Usuario.findByPk(id);

    return res.status(200).send(usuario);
}

export async function post(req: Request, res: Response): Promise<Response> {
    try {
        const usuario: Usuario = await Usuario.create({ ...req.body });
        return res.status(200).send(usuario);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function put(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
        await Usuario.update({ ...req.body }, { where: { id } });
        const updatedUsuario: Usuario | null = await Usuario.findByPk(id);

        return res.status(200).send(updatedUsuario);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function del(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const usuario: Usuario | null = await Usuario.findByPk(id);

    if (!usuario) {
        return res.status(404);
    } else {
        await Usuario.destroy({ where: { id } });
        return res.status(200).send(usuario);
    }
}