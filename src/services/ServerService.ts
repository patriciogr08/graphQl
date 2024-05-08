import express from 'express';
import { ServerConfig } from '../models/ServerConfig';
import { ErrorHandlerService } from './ErrorHandlerService';
import defaultConfig from '../config/default';
import { configureGraphQL } from '../graphql/configureGraphQL';
import { ApiResponse } from '../models/ApiResponse';

export class ServerService {
    private config: ServerConfig;
    private app: any;

    constructor(options: ServerConfig) {
        this.config = { ...defaultConfig, ...options };
        this.app = express();
        this.configure();
    }

    private configure() {
        this.app.set("port", this.config.port);
        configureGraphQL(this.app);
        this.app.get('*', (req: express.Request, res: express.Response) => {
            const apiResponse = new ApiResponse(422, 'Ruta no encontrada', null);
            res.status(apiResponse.statusCode).json(apiResponse.toObject());
        });
    }

    start() {
        new ErrorHandlerService().handleErrors(this.app);
        this.app.listen(this.config.port, () => {
            console.log(`Server on port ${this.config.port}`);
        });
    }
}