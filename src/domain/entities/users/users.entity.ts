import { IAdressesEntity } from "./adresses.entity";

export interface IUsersEntity {
    userId?: number,
    name?: string,
    address?: IAdressesEntity,
    cep?: string,
    email: string,
    password: string,
    birthDate?: Date
}