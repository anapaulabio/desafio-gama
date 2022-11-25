import express from "express";

import { validate, Joi } from 'express-validation';


import readUsecase from "../../../domain/usecases/users/read.usecase";
import constantsConfig from "../../../infrastructure/config/constants.config";
import logger from '../../../infrastructure/logs/winston.logs';

class ClientsMiddleware {
    validateRegister = validate({
        body: Joi.object({
            name: Joi.string().required(),
            code: Joi.string().min(8).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            phoneNumber: Joi.string().required(),
            avatar: Joi.string(),
            specialty: Joi.string(),
            crmv: Joi.string().required(),
            aboutMe: Joi.string(),
            queryValue: Joi.number(),
            queryDutyValue: Joi.number(),
	        formation: Joi.string(),
	        experience: Joi.string(),
	        teleconsultation: Joi.boolean()
        })
    })

    validateGetById = validate({
        params: Joi.object({
            userId: Joi.number().required(),
        })
    })

    async valitateUserExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        let user = await readUsecase.execute({
            userId: Number(req.params.userId)
        })
        if (user) {
            logger.info(["Usuario encontrado: ", user])
            next()
        } else {
            logger.error(["Usuario não encontrado"])
            res.status(404).send({ERROR: constantsConfig.CLIENTS.MESSAGES.ERROR.USER_NOT_EXIST.replace('{USER_ID}', req.params.userId)})
        }
    }


}

export default new ClientsMiddleware()