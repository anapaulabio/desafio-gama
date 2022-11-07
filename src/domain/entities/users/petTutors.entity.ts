import { IPetsEntity } from "./pets.entity";

export interface IPetTutorsEntity {
    userId: number,
    pet: IPetsEntity
}