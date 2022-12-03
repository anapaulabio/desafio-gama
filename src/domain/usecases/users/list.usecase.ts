import { ClientsEntity } from "../../entities/users/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

export class ListClientUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) {}

    async execute(filters?: object): Promise<ClientsEntity[] | undefined> {
        console.log("filters-usecase", filters);
        return await this._repository.list(filters);

    }
}

export default new ListClientUseCase(
    ClientsRepository
);