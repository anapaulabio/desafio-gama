import { CommonRoutesConfig } from "./common.routes";
import express from "express";
import authController from "../controllers/auth.controller";
<<<<<<< HEAD
=======
import authMiddleware from "../middlewares/auth.middleware";
>>>>>>> a17fe3609607c04b8226dfba482ed2ff9cff8347


export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/login`)
            .post(
<<<<<<< HEAD
                authController.login
            );

=======
                authMiddleware.validateLogin,
                authController.login
            );

        this.app.use(authMiddleware.validateError)
>>>>>>> a17fe3609607c04b8226dfba482ed2ff9cff8347
        return this.app;
    }
}