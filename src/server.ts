import fastify from 'fastify';
import cors from '@fastify/cors';

import { teamRoutes } from './routes/routeTeams.js';
import { driverRoutes } from './routes/routeDrivers.js';

const server = fastify({ logger: true });
server.register(cors, { origin: 'localhost' });
server.register(teamRoutes);
server.register(driverRoutes);

const defaultPort = 5000;
const port = Number(process.env.PORT) || defaultPort;

server.listen({ port }, () => console.log(`Server running on port ${port}`));
