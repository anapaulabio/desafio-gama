
import express from 'express';
import secret from "../../../infrastructure/config/secret.config";
import jwt  from 'jsonwebtoken'
import { IToken } from '../helpers/token.interface.helper';
import { Joi, validate, ValidationError } from 'express-validation';
import logger from '../../../infrastructure/logs/winston.logs';
import constantsConfig from '../../../infrastructure/config/constants.config';

class AuthMiddleware {

    authJWT(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const token = req.header('Authorization')?.replace('Baerer ', '')
            console.log(token)
            if (!token) {
                res.status(401).send({ERROR: constantsConfig.AUTH.MESSAGES.ERROR.TOKEN_REQUIRED})
              }
        
              const decoded = jwt.verify(token!, secret);
              
              (req as IToken).token = decoded;
              if(typeof decoded == `string`){
                res.status(401).send({
                    error: `Usuario nao autenticado.`
                });
            } else {
                console.log(`Id do usuário: ${decoded.indexId}`);
                next();
            }
           
        } catch (error) {
            logger.error("Token invalido, por favor tente novamente")
            res.status(401).send({ERROR: constantsConfig.AUTH.MESSAGES.ERROR.VERIFY_AUTH});
        }
    }

    validateLogin = validate({
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        })
    })
    
    async validateError (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        if (err instanceof ValidationError) {
            logger.error(["validate error"])
            return res.status(err.statusCode).json(err)
        }
        if (err.name === "UnauthorizedError") {
            logger.error(["unauthorized error"])
          res.status(401).send({ERROR: constantsConfig.AUTH.MESSAGES.ERROR.INVALID_TOKEN});
        } else {
          next(err);
        }
      }
}

export default new AuthMiddleware()