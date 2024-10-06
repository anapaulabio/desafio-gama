import ReadClientUseCase from './read.usecase'
import CreateClientUseCase from './create.usecase'
import {ClientsEntity} from '../../entities/users/client.entity'

test("Teste unitário ReadClientUsecase", async() => {

    const client: ClientsEntity = {
        "name": "Antônio Joseeé Silva",
        "code": "35530-000",
        "email": `jose_antaasonio${Math.random()}@outlook.com`,
        "password": "123456789",
        "phoneNumber": "74992856030"
    };


    // var clientEntity = await CreateClientUseCase.execute(client);
    // var clientRead =  await ReadClientUseCase.execute({ userId: clientEntity?.userId!});
    // expect(client.name).toBe(clientRead?.name);
    // expect(client.code).toBe(clientRead?.code);
    // expect(client.email).toBe(clientRead?.email);
    // expect(client.phoneNumber).toBe(clientRead?.phoneNumber);



    await CreateClientUseCase.execute(client).then( async (res) => {
        await ReadClientUseCase.execute({ userId: res?.userId!});
        expect(client?.name).toBe(res?.name);
        expect(client?.code).toBe(res?.code);
        expect(client?.email).toBe(res?.email);
        expect(client?.phoneNumber).toBe(res?.phoneNumber);
   
    });;

});