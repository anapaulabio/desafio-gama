import ReadClientUseCase from './read.usecase'
import CreateClientUseCase from './create.usecase'
import {ClientsEntity} from '../../entities/users/client.entity'

test("Teste unitário ReadClientUsecase", async() => {
    const client: ClientsEntity = {
        "userId": 1,
        "name": "Antônio José Silva",
        "code": "35530-000",
        "email": "jose_antonio@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    await CreateClientUseCase.execute(client);
    const client2: ClientsEntity = {
        "userId": 1,
        "name": "Antônio José Silva",
        "code": "35530-000",
        "email": "jose_antonio@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    expect(await ReadClientUseCase.execute({ userId: 1 })).toMatchObject(client2);
});