import { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCode } from '../utils/StatusCode.js';
import { dataTeamF1ById, dataTeamsF1 } from '../services/teamsService.js';
import { Params } from '../models/Params.js';

const getTeams = async (req: FastifyRequest, res: FastifyReply) => {
    const content = await dataTeamsF1();

    res.type('application/json').code(StatusCode.OK);
    res.send(content);
};

const getTeamById = async (
    req: FastifyRequest<{ Params: Params }>,
    res: FastifyReply
) => {
    const { id } = req.params;
    const content = await dataTeamF1ById(Number(id));
    const status = content ? StatusCode.OK : StatusCode.NOT_FOUND;

    res.type('application/json').code(status);
    res.send(content);
};

export { getTeams, getTeamById };
