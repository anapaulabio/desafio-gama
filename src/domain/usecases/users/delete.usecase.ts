import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

export class DeleteClientUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository) {}

    async execute(data: { userId: number }): Promise<void> {
        return await this._repository.deleteById(data.userId);
    }
}
 
export default new DeleteClientUseCase(
    ClientsRepository
);