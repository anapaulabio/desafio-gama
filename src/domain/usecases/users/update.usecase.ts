import bcrypt from "bcrypt";
import { IUsersEntity } from "../../entities/users/users.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapter/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";
import { CepFactory } from "../../../adapter/connectors/cepfactory.api";
import { ViaCepFactory } from "../../../infrastructure/apis/cep/viacepfactory.api";
import { ApiCepFactory } from "../../../infrastructure/apis/cep/apicepfactory.api";
import { ClientsEntity } from "../../entities/users/client.entity";

class UpdateClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository,  
        private _viaCep: CepFactory, private _apiCep: CepFactory) {}

    async execute(data: ClientsEntity): Promise<ClientsEntity | undefined> {
        data.password = bcrypt.hashSync(data.password, 10)
       data.address = await this._viaCep.preencheEndereco(data.code!)
        if(!data.address) {
            await this._apiCep.preencheEndereco(data.code!)
        }

        return await this._repository.updateById(data);
    }
}

export default new UpdateClientUseCase(
    ClientsRepository,
    new ViaCepFactory(),
    new ApiCepFactory()
);