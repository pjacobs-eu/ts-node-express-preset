// Frameworking imports
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { NotFoundController } from './controllers/NotFoundController';

export class App {
    app = express();

    constructor() {
        /**
         * MIDDLEWARES
         */
        this.app.use(helmet());
        this.app.use(morgan('combined'));

        /**
         * ROUTES
         */
        this.app.use('*', new NotFoundController().getRouter())

        /**
         * LISTEN
         */
        const port = process.env.PORT || 80;
        this.app.listen(port);
    }
}