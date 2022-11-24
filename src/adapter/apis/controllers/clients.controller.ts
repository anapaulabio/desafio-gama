import express from "express";

import { getErrorMessage } from "../helpers/errors.helper.adapter";

import createUsecase from "../../../domain/usecases/users/create.usecase";
import deleteUsecase from "../../../domain/usecases/users/delete.usecase";
import updateUsecase from "../../../domain/usecases/users/update.usecase";
import listUsecase from "../../../domain/usecases/users/list.usecase";
import readUsecase from "../../../domain/usecases/users/read.usecase";
import groupByCodeUsecase from "../../../domain/usecases/users/groupByCode.usecase";
import { upload } from "../../../infrastructure/config/multer.config";


class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        try {
           const clients = await listUsecase.execute(req.query)
           res.status(200).send(clients)
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))
        }
    }
    async getClientsById(req: express.Request, res: express.Response){
        try {
            const clients = await readUsecase.execute({
                userId: Number(req.params.userId)
            })
            res.status(200).send(clients)
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))
        }
    }
    async createClients(req: express.Request, res: express.Response){
        try {
            const clients = await createUsecase.execute(req.body)
            res.status(201).send(clients)
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))
        }
    }

    async updateClients(req: express.Request, res: express.Response){
        try {
            const clients = await updateUsecase.execute(req.body)
            res.status(200).send(clients)
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))
        }
    }
    async deleteClients(req: express.Request, res: express.Response){
        try {
            const clients = await deleteUsecase.execute({
                userId: Number(req.params.userId)
            })
            res.status(204).send()
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))            

        }
    }
    async groupClientsByCode(req: express.Request, res: express.Response){
        try {
            const clients = await groupByCodeUsecase.execute(req.params.code)
            res.status(200).send(clients)
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))         
        }
    }

    async createImage( req: express.Request, res: express.Response){
        try {
            
          res.status(201).send({avatar: req.file?.destination})
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))
        }
    }
    
}

export default new ClientsController()