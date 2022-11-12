/*import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import secret from "../../../infrastructure/config/secret.config"
import { IUsersRepository } from "../../repositories/users.repository.interface";
import { IUseCase } from "../usecase.interface";
import UsersRepository from "../../../adapter/repositories/users.repository";

export class LoginClientUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) { }

    async execute(data: { email: string, password: string }) {
        const client = await this._repository.readByWhere(data.email, data.password)

        if (client) {
            const token = jwt.sign(client, secret, {
                expiresIn: '2 days'
            });

            let passHash = bcrypt.compareSync(data.password, client!.password)
            if (passHash) {
                return {
                    client: client,
                    token: token
                }
            }
        }
        return;
    }

}

export default new LoginClientUseCase(
    UsersRepository
);*/