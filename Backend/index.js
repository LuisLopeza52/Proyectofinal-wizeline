import bodyParser from 'body-parser';
import cors from 'cors';
import express from "express";
import { configuration, handleError, logError } from "./middleware/index.js";
import { defaultConfig } from "./providers/index.js";
import { PersonajesRoute, ComicsRoute } from "./router/index.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(configuration);

PersonajesRoute(app);
ComicsRoute(app);

app.use(logError);
app.use(handleError);

app.listen(defaultConfig.port, () => {
  console.log(
    `listen at http://${defaultConfig.host}:${defaultConfig.port}`
  );
});
