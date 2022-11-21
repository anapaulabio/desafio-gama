import { IAddressesEntity } from "./addresses.entity";

export interface IUsersEntity {
    userId?: number,
    name: string,
    address?: IAddressesEntity,
    code: string,
    email: string,
    password: string,
    phoneNumber: string,
}