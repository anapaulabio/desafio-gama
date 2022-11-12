import { IUseCase } from "../usecase.interface";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import  ClientsRepository from "../../../adapter/repositories/clients.repository";

export class GroupClientsByCity implements IUseCase {
    constructor( private _repository: IClientsRepository){}

    async execute(city: string) {
        await this._repository.groupClientsByCity(city)
    }

}

export default new GroupClientsByCity(
    ClientsRepository
)