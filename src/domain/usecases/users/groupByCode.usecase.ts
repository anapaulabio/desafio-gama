import { IUseCase } from "../usecase.interface";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import  ClientsRepository from "../../../adapter/repositories/clients.repository";

export class GroupClientsByCode implements IUseCase {
    constructor( private _repository: IClientsRepository){}

    async execute(code: string) {
        return await this._repository.groupClientsByCode(code)
    }

}

export default new GroupClientsByCode(
    ClientsRepository
)