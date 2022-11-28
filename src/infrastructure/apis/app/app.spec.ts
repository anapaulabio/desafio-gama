// import supertest from "supertest";
// import api from "./app";
// import {ClientsEntity} from '../../../domain/entities/users/client.entity'

// describe("Testes integrados de clientes",  () => {
//     test("Teste integrado de criação de cliente", async () => {
//         const client: ClientsEntity = {
//             "userId": 1998,
//             "name": "Antônio José Silva",
//             "code": "35530-000",
//             "email": "jocaerasdrew@outlook.com",
//             "password": "",
//             "phoneNumber": "74992856030",
//     }

//         const res = await supertest(api).post('/vets')
//                                         .send(client)
//                                         .set('Accept', 'application/json');

//         expect(res.status).toEqual(201);
//         expect(res.body).toMatchObject(client);
//     } );
// });