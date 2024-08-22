import { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCode } from '../utils/StatusCode.js';
import { dataDriversF1, dataDriverF1ById } from '../services/driversService.js';
import { Params } from '../models/Params.js';

const getDrivers = async (req: FastifyRequest, res: FastifyReply) => {
    const content = await dataDriversF1();

    res.type('application/json').code(StatusCode.OK);
    res.send(content);
};

const getDriverById = async (
    req: FastifyRequest<{ Params: Params }>,
    res: FastifyReply
) => {
    const { id } = req.params;
    const content = await dataDriverF1ById(Number(id));
    const status = content ? StatusCode.OK : StatusCode.NOT_FOUND;

    res.type('application/json').code(status);
    res.send(content);
};

export { getDrivers, getDriverById };
