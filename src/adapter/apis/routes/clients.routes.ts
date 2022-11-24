import express from "express";
import clientsController from "../controllers/clients.controller";
import authMiddleware from "../middlewares/auth.middleware";
import clientsMiddleware from "../middlewares/clients.middleware";
import { CommonRoutesConfig } from "./common.routes";
import multer from "multer";
import uploadController from "../controllers/upload.controller";


const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

export class ClientsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'clientsRoutes')
    }

    configureRoutes(): express.Application {
        this.app.route(`/vets`)
          .get(clientsController.listClients)
          .post(
            //clientsMiddleware.validateRegister,
            clientsController.createClients
            )
          
        this.app.route(`/vets/photos`)
          .post(
            upload.single('avatar'),
            uploadController.createImage
            )

        this.app.route('/vets/:userId')
          .all(
            clientsMiddleware.validateGetById,
            clientsMiddleware.valitateUserExists
            )
          .get(clientsController.getClientsById)
          .delete(
            authMiddleware.authJWT,
            clientsController.deleteClients
            )
          .put(
            authMiddleware.authJWT,
            clientsController.updateClients
            )


        this.app.route(`/vets/cep/:code`)
          .get(clientsController.groupClientsByCode)
      

        this.app.use(authMiddleware.validateError)
        
        return this.app
    }
}