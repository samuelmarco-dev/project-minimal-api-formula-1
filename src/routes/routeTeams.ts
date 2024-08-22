import { FastifyInstance } from 'fastify';
import { getTeamById, getTeams } from '../controllers/teamsController.js';
import { Params } from '../models/Params.js';

export async function teamRoutes(fastify: FastifyInstance) {
    fastify.get('/teams', getTeams);
    fastify.get<{ Params: Params }>('/team/:id', getTeamById);
}
