import jwt from "jsonwebtoken";
import { IUseCase } from "../usecase.interface";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import secret from "../../../infrastructure/config/secret.config";
import constantsConfig from "../../../infrastructure/config/constants.config";
import logger from "../../../infrastructure/logs/winston.logs";

export class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) { }

    async execute(data: { email: string, password: string }) {
        const user = await this._repository.readByWhere(data.email, data.password)

        if (!user) {
            logger.error("email invalido")
            throw new Error(constantsConfig.AUTH.MESSAGES.ERROR.INVALID_EMAIL)
        }

        if (user.password === data.password) {
            const token = jwt.sign(user, secret, {
                expiresIn: '2 days'
            })

            return {
                user: user,
                token: token
            }
        } else {
            logger.error("Senha inválida")
            throw new Error(constantsConfig.AUTH.MESSAGES.ERROR.INVALID_PASS)
        }
    }
}

export default new LoginAuthUseCase(
    ClientsRepository
);