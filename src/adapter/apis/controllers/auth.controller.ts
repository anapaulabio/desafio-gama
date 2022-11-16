import express from 'express';
import debug from 'debug';
<<<<<<< HEAD
import  LoginAuthUseCase  from '../../../domain/usecases/auth/login.clients';
=======
import loginAuthUseCase  from '../../../domain/usecases/auth/login.auth.usecase';
import { getErrorMessage } from '../helpers/errors.helper.adapter';
import constantsConfig from '../../../infrastructure/config/constants.config';
>>>>>>> a17fe3609607c04b8226dfba482ed2ff9cff8347

const log: debug.IDebugger = debug('app:auth-controller');

class AuthController {
    async login(req: express.Request, res: express.Response){
<<<<<<< HEAD
        const users = await LoginAuthUseCase.execute(req.body);
        //if(users)//
        
            res.status(200).send(users);
         /* else {
            res.status(401).send({
                error: `Dados incorretos.`
            });
        }*/
        
=======
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
               
>>>>>>> a17fe3609607c04b8226dfba482ed2ff9cff8347
    }
}

export default new AuthController();