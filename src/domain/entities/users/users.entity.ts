import { IAdressesEntity } from "./adresses.entity";

export interface IUsersEntity {
    userId?: number,
    name?: string,
    cep?: IAdressesEntity,
    email: string,
    password: string,
    birthDate?: Date
}