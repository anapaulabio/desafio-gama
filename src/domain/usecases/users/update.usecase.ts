import { IUsersEntity } from "../../entities/users/users.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class UpdateClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: IUsersEntity): Promise<IUsersEntity | undefined> {
        return await this._repository.updateById(data);
    }
}

export default new UpdateClientUseCase(
    ClientsRepository
);