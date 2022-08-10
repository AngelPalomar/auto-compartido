import { Request, Response } from 'express';
import Usuario from './usuario.model';

export async function get(_: Request, res: Response): Promise<Response> {
    const usuarios: Usuario[] = await Usuario.findAll();

    return res.status(200).send(usuarios);
}

export async function getById(req: Request, res: Response) {
    const { id } = req.params;
    const usuario: Usuario | null = await Usuario.findByPk(id);

    return res.status(404).send(usuario);
}

export async function post(req: Request, res: Response) {
    try {
        const usuario: Usuario = await Usuario.create({ ...req.body });
        return res.status(200).send(usuario);
    } catch (error) {
        return res.status(500).send(error);
    }
}
