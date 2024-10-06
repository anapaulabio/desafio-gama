import  { CreateClientUseCase }  from "./create.usecase";
import { ClientsEntity } from "../../entities/users/client.entity";
import { ClientsRepository } from "../../../adapter/repositories/clients.repository";
import { ViaCepFactory } from "../../../infrastructure/apis/cep/viacepfactory.api";
import { ApiCepFactory } from "../../../infrastructure/apis/cep/apicepfactory.api";

jest.mock("../../../adapter/repositories/clients.repository");
const ClientsRepositoryMock = ClientsRepository as jest.Mock<ClientsRepository>;

test("Teste createClientUsecase", async ( ) => {
    const clientRepository = new ClientsRepositoryMock() as jest.Mocked<ClientsRepository>;
    clientRepository.create.mockResolvedValue({
        "userId": 1,
        "name": "Antônio José Silva",
        "code": "35530-000",
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
        "code": "35530-000",
        "email": "jose_antonio@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    let clientRef: object = {};
    Object.assign(clientRef, client);
    (clientRef as ClientsEntity).password = undefined;


    const createClientUseCase = new CreateClientUseCase (
        clientRepository,
        new ViaCepFactory(),
        new ApiCepFactory()
    );

    expect (await createClientUseCase.execute(client)).toMatchObject(clientRef);
});
