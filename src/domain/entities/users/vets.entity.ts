import { IUsersEntity } from "./users.entity";

export interface IVetsEntity extends IUsersEntity {
    avatar?: string,
    specialty?: string,
    crmv?: string,
    queryValue?: number,
    formation?: string,
    experience?: string,
    teleconsultation?: boolean
}