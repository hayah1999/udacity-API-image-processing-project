import express from 'express';
import logger from './utilites/logger';
import imageRoute from './api/imageroute';
// creating route for my API
const mainRoute = express.Router();
// async is here so that response can wait till sharp process
mainRoute.get('/', (req: express.Request, res: express.Response): void => {});
mainRoute.use('/images', imageRoute);

export default mainRoute;
