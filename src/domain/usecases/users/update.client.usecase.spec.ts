import updateUsecase from './update.usecase';
import createUsecase from './create.usecase';
import { ClientsEntity } from '../../entities/users/client.entity'

test("Teste unitário UpdateClientUsecase", async() => {
    const client: ClientsEntity = {
        "userId": 1,
        "name": "Antônio José Silva",
        "code": "35530-000",
        "email": "jose_antonio@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    await createUsecase.execute(client);
    const client2: ClientsEntity = {
        "userId": 1,
        "name": "Antasônio José Silva",
        "code": "35530-000",
        "email": "jose_antonio@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    const client3: ClientsEntity = {
        "userId": 1,
        "name": "Antasônio José Silva",
        "code": "35530-000",
        "email": "jose_antonio@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    expect(await updateUsecase.execute(client2)).toMatchObject(client3);
});