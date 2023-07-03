import 'dotenv/config';

/**
 * @typedef Config
 * @type {object}
 * @property {string} host Hostname
 * @property {(number|string)} port Port
 * @property {string} user Username
 * @property {string} dbConnectionSting Database url
 */

/** @type {Config} */
export const defaultConfig = {
  host: process.env.HOST,
  port: process.env.PORT,
};
