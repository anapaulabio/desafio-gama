import { IUsersEntity } from "./users.entity";

export interface IVetsEntity extends IUsersEntity {
    specialty?: string,
    crmv?: string,
    queryValue?: number,
    formation?: string,
    experience?: string,
    teleconsultation?: boolean
}