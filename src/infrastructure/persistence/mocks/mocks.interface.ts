import  {ClientsEntity}  from "../../../domain/entities/users/client.entity";

export default interface IMocks {
    getClients(): ClientsEntity[];
}