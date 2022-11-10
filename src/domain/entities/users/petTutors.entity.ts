import { IUsersEntity } from "./users.entity";

export interface IPetTutorsEntity extends IUsersEntity {
    cpf: string,
    phone: string,
}