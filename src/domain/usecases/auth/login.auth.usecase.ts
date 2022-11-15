import { IUseCase } from "../usecase.interface";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import jwt from 'jsonwebtoken';
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import { IUsersEntity } from "../../entities/users/users.entity";
import { ClientsEntity } from "../../entities/users/client.entity";

export class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository){}

    async execute(data: { email: string, password: string}) {
        const user = await this._repository.readByWhere(data.email, data.password)


        if(user){
            const token = jwt.sign(user, String(process.env.SECRET_KEY), {
                expiresIn: '2 days'
            })

            return {
                user: user,
                token: token
            }
        }

        return;
    }
}

export default new LoginAuthUseCase(
    ClientsRepository 
);