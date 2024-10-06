import { CommonRoutesConfig } from "./common.routes";
import express from "express";
import authController from "../controllers/auth.controller";

import authMiddleware from "../middlewares/auth.middleware";



export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/login`)
            .post(
                authMiddleware.validateLogin,
                authController.login
            );

        this.app.use(authMiddleware.validateError)

        return this.app;
    }
}