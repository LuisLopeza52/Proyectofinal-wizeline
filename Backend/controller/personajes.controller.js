import { constants } from "http2";
import { personajesServices } from "../services/index.js";

const getAll = async (req, res, next) => {
  try {
    const personajes = await personajesServices.getAll();
    res.status(constants.HTTP_STATUS_OK).json(personajes);
  } catch (err) {
    err.status = constants.HTTP_STATUS_NO_CONTENT;
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const personaje = await personajesServices.getbyId(req);
    res.status(constants.HTTP_STATUS_OK).json(personaje);;
  } catch (err) {
    err.status = constants.HTTP_STATUS_NO_CONTENT;
    next(err);
  }
};

export const PersonajesController = {
  getAll,
  getById,
};
