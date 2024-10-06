import { IUsersEntity } from "./users.entity";

export interface IVetsEntity extends IUsersEntity {
    avatar?: string,
    specialty?: string,
    crmv: string,
    aboutMe?: string,
    queryValue?: number,
    queryDutyValue?: number,
    formation?: string,
    experience?: string,
    teleconsultation?: boolean
}