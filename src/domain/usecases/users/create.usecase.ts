import { ClientsEntity } from "../../entities/users/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import { IUseCase } from "../usecase.interface";
import { ViaCepFactory } from "../../../infrastructure/apis/cep/viacepfactory.api";
import { ApiCepFactory } from "../../../infrastructure/apis/cep/apicepfactory.api";
import { CepFactory } from "../../../adapter/connectors/cepfactory.api" 
import ClientsRepository from "../../../adapter/repositories/clients.repository";

export class CreateClientUseCase implements IUseCase {
    constructor(private _repository: IClientsRepository,
        private _viaCep: CepFactory, private _apiCep: CepFactory){}
    
    async execute(data: ClientsEntity): Promise<ClientsEntity | undefined> {
       data.address = await this._viaCep.preencheEndereco(data.code!)
        if(!data.address) {
            await this._apiCep.preencheEndereco(data.code!)
        }

        const client = await this._repository.create(data);
        client.password = undefined;
        return client;
    }
}

export default new CreateClientUseCase(
    ClientsRepository,
    new ViaCepFactory(),
    new ApiCepFactory()
)