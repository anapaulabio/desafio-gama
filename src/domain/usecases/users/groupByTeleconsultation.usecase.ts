import { IUseCase } from "../usecase.interface";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import  ClientsRepository from "../../../adapter/repositories/clients.repository";

export class groupClientsByTeleconsultation implements IUseCase {
    constructor( private _repository: IClientsRepository){}

    async execute(teleconsultation: string) {
        return await this._repository.groupClientsByTeleconsultation(teleconsultation)
    }

}

export default new groupClientsByTeleconsultation(
    ClientsRepository
)