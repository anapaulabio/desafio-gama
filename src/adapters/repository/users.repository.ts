import { IUsersRepository } from "../../domain/repository/user.repository";
import * as Sequelize from 'sequelize'
import { IUsersEntity } from "../../domain/entities/users/users.entity";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import cryptoPassUser from "../helpers/crypto.pass.user";

export class UserRepository implements IUsersRepository {
    constructor(
        private _database: IDatabaseModel;
        private _modelUser: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ){}
    async listLogin(email: string, password: string): Promise<IUsersEntity | undefined> {
        try {
            const foundUser: IUsersEntity = await this._database.listOneByWhere(this._modelUser, {
                email: email
            });
            if (foundUser) {
                if (bcrypt.compareSync(password, foundUser.password)) {
                    return modelToEntitiesUsers(foundUser);
                } else {
                    return
                }
            } else {
                return
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}