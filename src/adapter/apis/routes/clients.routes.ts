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

        this.app.route('/vets/:userId')
        .get(clientsController.listClients)
        .delete(clientsController.deleteClients)
        .put(clientsController.updateClients)

        this.app.route(`/vets/cep/:code`)
        .get(clientsController.groupClientsByCode)

        this.app.route(`/vets/teleconsultation/:teleconsultation`)
        .get(clientsController.groupClientsByTeleconsultation)
        
        return this.app
    }
}