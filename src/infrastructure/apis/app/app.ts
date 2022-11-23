import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { debug } from 'debug';

import { CommonRoutesConfig } from '../../../adapter/apis/routes/common.routes';
import { ClientsRoutes } from '../../../adapter/apis/routes/clients.routes';
import { AuthRoutes } from '../../../adapter/apis/routes/auth.routes';
import apiConfig from '../../config/api.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = apiConfig.port;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());



const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
}

if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new ClientsRoutes(app));
routes.push(new AuthRoutes(app));


const runningMessage = `Servidor rodando na porta ${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
})

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
});

export default app;