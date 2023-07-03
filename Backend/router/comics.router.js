import express from 'express';
import { ComicsController } from '../controller/index.js';
/**
 * Route definitions of the comics of characters
 * @param {express.Express} app Instance of an Express application.
 */
export const ComicsRoute = (app) => {
    
    const router = express.Router();
    app.use('/comics', router);
    router.get('/', ComicsController.getByIdCharacter);
  };