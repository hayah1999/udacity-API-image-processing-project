import express from 'express';
import logger from '../utilites/logger';

import imageUrl from '../utilites/sharpmodule';
// creating route for my API
const imageRoute = express.Router();
// async is here so that response can wait till sharp process
imageRoute.get(
 '/',
 imageUrl,
 logger,
 (req: express.Request, res: express.Response): void => {}
);

export default imageRoute;
