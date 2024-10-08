import { ClientsEntity } from "../entities/users/client.entity"

export interface IClientsRepository {
    readById(resourceId: number): Promise<ClientsEntity | undefined>,
    create(resource: ClientsEntity): Promise<ClientsEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(filters?: any): Promise<ClientsEntity[]>,
    updateById(resource: ClientsEntity): Promise<ClientsEntity | undefined>
    groupClientsByCode(code: string): Promise<any>,
    readByWhere(email: string, password: string): Promise<ClientsEntity | undefined>
}