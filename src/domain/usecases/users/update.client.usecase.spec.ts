import updateUsecase from './update.usecase';
import createUsecase from './create.usecase';
import { ClientsEntity } from '../../entities/users/client.entity'
test("Teste unitário UpdateClientUsecase", async() => {
    const client: ClientsEntity = {
        "userId": 19874,
        "name": "Antônio José Silva",
        "code": "35530-000",
        "email": "jose_antona1io@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    await createUsecase.execute(client);
    const client2: ClientsEntity = {
        "userId": 19874,
        "name": "Antasônio José Silva",
        "code": "35530-000",
        "email": "jose_antona1io@outlook.com",
        "password": "123456789",
        "phoneNumber": "74992856030"
    };
    const res = await updateUsecase.execute(client2);
    expect(res?.userId).toBe(client2.userId);
    expect(res?.name).toBe(client2.name);
    expect(res?.code).toBe(client2.code);
    expect(res?.email).toBe(client2.email);
    expect(res?.phoneNumber).toBe(client2.phoneNumber);
});