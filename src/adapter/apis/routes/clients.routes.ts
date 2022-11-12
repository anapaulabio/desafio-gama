import express from "express";

import clientsController from "../controllers/clients.controller";
import { CommonRoutesConfig } from "./common.routes";

export class ClientsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'clientsRoutes')
    }

    configureRoutes(): express.Application {
        this.app.route(`/vets`)
        .get(clientsController.listClients)
        .post(clientsController.createClients)

        this.app.route(`/vets/city`)
        .get(clientsController.groupClientsByCity)

        return this.app
    }
}