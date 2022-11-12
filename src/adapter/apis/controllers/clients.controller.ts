import express from "express";

import createUsecase from "../../../domain/usecases/users/create.usecase";
import deleteUsecase from "../../../domain/usecases/users/delete.usecase";
import updateUsecase from "../../../domain/usecases/users/update.usecase";
import listUsecase from "../../../domain/usecases/users/list.usecase";
import readUsecase from "../../../domain/usecases/users/read.usecase";
import groupByCityUsecase from "../../../domain/usecases/users/groupByCity.usecase";

class ClientsController {
    async listClients(req: express.Request, res: express.Response){
        try {
           const clients = await listUsecase.execute()

           res.status(200).send(clients)
        } catch (error) {
            
        }
    }
    async getClientsById(req: express.Request, res: express.Response){
        try {
            const clients = await readUsecase.execute({
                userId: Number(req.params.userId)
            })
            res.status(200).send(clients)
        } catch (error) {
            
        }
    }
    async createClients(req: express.Request, res: express.Response){
        try {
            const clients = await createUsecase.execute(req.body)

            res.status(201).send(clients)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
    async updateClients(req: express.Request, res: express.Response){
        try {
            const clients = await updateUsecase.execute(req.body)

            res.status(200).send(clients)
        } catch (error) {
            
        }
    }
    async deleteClients(req: express.Request, res: express.Response){
        try {
            const clients = await deleteUsecase.execute({
                userId: Number(req.params.userId)
            })

            res.status(204).send()
        } catch (error) {
            
        }
    }
    async groupClientsByCity(req: express.Request, res: express.Response){
        try {
            const clients = await groupByCityUsecase.execute(req.params.city)

            res.status(200).send(clients)
        } catch (error) {
            
        }
    }
}

export default new ClientsController()