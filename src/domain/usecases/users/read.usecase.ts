import { IUsersEntity } from "../../entities/users/users.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class ReadClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {}

    async execute(data: { userId: number }): Promise<IUsersEntity | undefined> {
        return await this._repository.readById(data.userId);
    }
}

export default new ReadClientUseCase(
    ClientsRepository
);