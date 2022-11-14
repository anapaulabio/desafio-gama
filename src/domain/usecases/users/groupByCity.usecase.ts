import { IUseCase } from "../usecase.interface";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import  ClientsRepository from "../../../adapter/repositories/clients.repository";

export class GroupClientsByCep implements IUseCase {
    constructor( private _repository: IClientsRepository){}

    async execute(cep: string) {
        await this._repository.groupClientsByCep(cep)
    }

}

export default new GroupClientsByCep(
    ClientsRepository
)