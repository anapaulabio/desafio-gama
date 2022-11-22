// import { ClientsEntity } from "../../../domain/entities/users/client.entity";
// import  CreateClientUseCase  from "../../../domain/usecases/users/create.usecase";
// import FakerMocks from "./faker.mocks";
// import IMocks from "./mocks.interface";

// class Mocks {
//     private _clients: ClientsEntity[];

//     constructor(mocksGenerator: IMocks){
//         this._clients = mocksGenerator.getClients();
//     }

//     async createClients(){
//         let countUsers = 0;
//         for(countUsers = 0; countUsers < this._clients.length; countUsers++){
//             await CreateClientUseCase.execute(this._clients[countUsers]);
//         }

//         return {
//             createdUsers: countUsers
//         };
//     }
// }

// const mocks = new Mocks(new FakerMocks);

// mocks.createClients().then((result) => {
//     console.log(result);
// });