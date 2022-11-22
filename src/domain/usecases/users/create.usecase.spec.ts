import  { CreateClientUseCase }  from "./create.usecase";
import { ClientsEntity } from "../../entities/users/client.entity";
import { ClientsRepository } from "../../../adapter/repositories/clients.repository";
import { ViaCepFactory } from "../../../infrastructure/apis/cep/viacepfactory.api";
import { ApiCepFactory } from "../../../infrastructure/apis/cep/apicepfactory.api";

jest.mock("../../../adapters/repositories/clients.repository");
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>;

test("Teste createClientUsecase", async ( ) => {
    const clientRepository = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>;
    clientRepository.create.mockResolvedValue({
        "userId": 1,
        "name": "Antônio José Silva",
        "code": "35530000",
        "email": "jose_antonio@outlook.com",
        "password": "12345678",
        "phoneNumber": "74992856030",
        "address": {
            "code": "35530000",
            "address": "",
            "complement": "",
            "district": "",
            "city": "Cláudio",
            "state": "MG"  
        }
    });
    const client: ClientsEntity = {
        "userId": 1,
        "name": "Antônio José Silva",
        "code": "35530000",
        "email": "jose_antonio@outlook.com",
        "password": "12345678",
        "phoneNumber": "74992856030"
    };

    const createClientUseCase = new CreateClientUseCase (
        clientRepository,
        new ViaCepFactory(),
        new ApiCepFactory()
    );

    expect (await createClientUseCase.execute(client)).toMatchObject(client);
});