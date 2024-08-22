import { FastifyInstance } from 'fastify';
import { getDriverById, getDrivers } from '../controllers/driversController.js';
import { Params } from '../models/Params.js';

export async function driverRoutes(fastify: FastifyInstance) {
    fastify.get('/drivers', getDrivers);
    fastify.get<{ Params: Params }>('/driver/:id', getDriverById);
}
