import express from 'express';
import debug from 'debug';
import loginAuthUseCase  from '../../../domain/usecases/auth/login.auth.usecase';
import { getErrorMessage } from '../helpers/errors.helper.adapter';
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:auth-controller');

class AuthController {
    async login(req: express.Request, res: express.Response){
        try {
            const users = await loginAuthUseCase.execute(req.body)
            console.log("users-controller", users)
            if(!users){
                return res.status(401).send({
                    error: constantsConfig.AUTH.MESSAGES.ERROR.INVALID_DATA
                })
            }
            res.status(200).send({data: users});
        } catch (error) {
            return res.status(500).send(getErrorMessage(error))
        }
               
    }
}

export default new AuthController();