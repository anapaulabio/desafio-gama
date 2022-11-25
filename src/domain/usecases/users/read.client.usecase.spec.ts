import ReadClientUseCase from './read.usecase'
import CreateClientUseCase from './create.usecase'
import {ClientsEntity} from '../../entities/users/client.entity'

test("Teste unitário ReadClientUsecase", async() => {
    const client: ClientsEntity = {
        "userId": 1900,
        "name": "Antônio José Silva",
        "code": "35530-000",
        "email": "jose_antonio@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    await CreateClientUseCase.execute(client);
    const res = await ReadClientUseCase.execute({ userId: 1900 });
    expect(res?.userId).toBe(client.userId);
    expect(res?.name).toBe(client.name);
    expect(res?.code).toBe(client.code);
    expect(res?.email).toBe(client.email);
    expect(res?.phoneNumber).toBe(client.phoneNumber);
});