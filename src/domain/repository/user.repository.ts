import { IUsersEntity } from '../entities/users/users.entity'

export interface IUsersRepository {
    readByWhere(email: string, password: string): Promise<IUsersEntity | undefined>
}