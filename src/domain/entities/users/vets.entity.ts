import { IUsersEntity } from "./users.entity";

export interface IVetsEntity extends IUsersEntity {
    specialty: string,
    CRMV: string,
    queryValue: number,
    whatsappLink: string,
    experience: string,
    teleconsultation: boolean
}