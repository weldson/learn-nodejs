import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// routes.get('/', UserController);
routes.post('/users', UserController.store);
routes.put('/users/:id', authMiddleware, UserController.update);
routes.post('/sessions', SessionController.store);

export default routes;
