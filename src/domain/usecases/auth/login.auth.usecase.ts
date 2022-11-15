import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { IUseCase } from "../usecase.interface";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";


export class LoginAuthUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) { }

    async execute(data: { email: string, password: string }) {
        const user = await this._repository.readByWhere(data.email, data.password)

        if (!user) {
            throw new Error("Email não encontrado!")
        }

        const isMatch = bcrypt.compareSync(data.password, user!.password)

        if (isMatch) {
            const token = jwt.sign(user, String(process.env.SECRET_KEY), {
                expiresIn: '2 days'
            })

            return {
                user: user,
                token: token
            }
        } else {
            throw new Error("Senha incorreta!")
        }
        
    }
}

export default new LoginAuthUseCase(
    ClientsRepository
);