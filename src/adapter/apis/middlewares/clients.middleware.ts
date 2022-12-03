import express from "express";

import { validate, Joi } from 'express-validation';

import readUsecase from "../../../domain/usecases/users/read.usecase";
import constantsConfig from "../../../infrastructure/config/constants.config";
import logger from '../../../infrastructure/logs/winston.logs';

import { randomBytes } from "crypto";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import uploadConfig from "../../../infrastructure/config/upload.config";

const s3 = new S3Client({ 
    region: uploadConfig.region, 
    credentials: { 
        accessKeyId: uploadConfig.accessKeyId, 
        secretAccessKey: uploadConfig.secretAccessKey
    } 
});

class ClientsMiddleware {
    validateRegister = validate({
        body: Joi.object({
            name: Joi.string().required(),
            code: Joi.string().min(8).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            phoneNumber: Joi.string().required(),
            avatar: Joi.string().required(),
            specialty: Joi.string().required(),
            crmv: Joi.string().required(),
            aboutMe: Joi.string().required(),
            queryValue: Joi.number().required(),
            queryDutyValue: Joi.number().required(),
	        formation: Joi.string().required(),
	        experience: Joi.string().required(),
	        teleconsultation: Joi.boolean().required()
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

    upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: uploadConfig.bucketName,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: (req, file, cb) => {
                randomBytes(16, (error, hash) => {
                    if (error) {
                        cb(error, file.filename)
                    }
                    const filename = `${hash.toString('hex')}.png`
                    cb(null, filename)
                })
            }
        }),
        limits:{
            fileSize: 4 * 1024 * 1024 //4mb
        },
        fileFilter: (req, file, callback) => {
            const formats = [
                'image/jpeg',
                'image/jpg',
                'image/png',
            ];
    
            if (formats.includes(file.mimetype)) {
                callback(null,true)
            } else {
                callback (new Error ('format not accepted'))
            }
        }
    })

}

export default new ClientsMiddleware()