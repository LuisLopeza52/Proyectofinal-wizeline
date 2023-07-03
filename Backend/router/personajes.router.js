import express from 'express';
import { PersonajesController } from '../controller/index.js';
/**
 * Route definitions of the comics of characters
 * @param {express.Express} app Instance of an Express application.
 */
export const PersonajesRoute = (app) => {
    
    const router = express.Router();
    app.use('/personajes', router);
    router.get('/', PersonajesController.getAll);
    router.get('/:id', PersonajesController.getById);
    
  };