import { constants } from 'http2';
import { comicsServices } from '../services/index.js';


/** Handler for get blog by id request
 * @param {import('express').Request} req Request body
 * @param {import('express').Response} res Response body
 * @param {import('express').NextFunction} next Next function
 */
const getByIdCharacter = async (req, res, next) => {
    try {
      const comics = await comicsServices.getByIdCharacter();
      res.status(constants.HTTP_STATUS_OK).json(comics);
    } catch (err) {
      err.status = constants.HTTP_STATUS_NO_CONTENT;
      next(err);
    }
  };


export const ComicsController = {
    getByIdCharacter
  };