import * as Sequelize from "sequelize";

import { ClientsEntity } from "../../domain/entities/users/client.entity";
import { IClientsRepository } from "../../domain/repositories/clients.repository.interface";
import usersModel from "../../infrastructure/persistence/mysql/models/users/users.model";
import vetsModel from "../../infrastructure/persistence/mysql/models/users/vets.model";
import addressesModel from "../../infrastructure/persistence/mysql/models/users/addresses.model";
import entityToModel from "../../infrastructure/persistence/mysql/helpers/entityToModel.helpers";
import modelToEntity from "../../infrastructure/persistence/mysql/helpers/modelToEntity.helper";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import modelVetToEntity from "../../infrastructure/persistence/mysql/helpers/modelVetToEntity.helper";
//import bcrypt from 'bcrypt'




export class ClientsRepository implements IClientsRepository {
    constructor (
        private _database: IDatabaseModel,
        private _usersModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _vetsModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _addressesModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        ){
            this._usersModel.hasOne(this._vetsModel, {
                foreignKey: 'userId',
                as: 'vets'
            })
            
            this._usersModel.hasOne(this._addressesModel, {
                foreignKey: 'userId',
                as: 'addresses'
            })

            this._vetsModel.hasOne(this._usersModel, {
                foreignKey: 'userId',
                as: 'users'
            })

            this._vetsModel.hasOne(this._addressesModel, {
                foreignKey: 'userId',
                as: 'addresses',
            })
        }

        async create(resource: ClientsEntity): Promise<ClientsEntity> {
            const { users, vets, addresses } = entityToModel(resource)
            const userModel = await this._database.create(this._usersModel, users)
            if (vets){
                vets.userId = userModel.null
                const vetModel = await this._database.create(this._vetsModel, vets)
            }

            if (addresses){
                addresses.userId = userModel.null
                const addressesModel = await this._database.create(this._addressesModel, addresses)
            }

            resource.userId = userModel.nulls

            return resource
        }

        async list(filters: Sequelize.WhereOptions): Promise<ClientsEntity[]> {
            console.log("filter-repository", filters)
            const users = await this._database.list(this._vetsModel, {
                include: [
                    'users',
                    'addresses'
                ],
                where: filters
            })
            

            const client = users.map(modelVetToEntity)
            return client
        }

        async readById(resourceId: number): Promise<ClientsEntity | undefined> {
            try {
                const users = await this._database.read(this._usersModel, resourceId, {
                    include: [
                        'vets',
                        'addresses'
                    ]
                })

                return modelToEntity(users)
            } catch (error) {
                
            }
        }

        async updateById(resource: ClientsEntity): Promise<ClientsEntity | undefined> {
            let userModel = await this._database.read(this._usersModel, resource.userId!, {
                include: [
                    'vets',
                    'addresses'
                ]
            })
            console.log("userModel-Retpository", userModel)
            let { users, vets, addresses } = entityToModel(resource)
            await this._database.update(userModel, users)

            if (vets){
                await this._database.update(await userModel.getVets(), vets)
            }

            if(addresses){
                await this._database.update(await userModel.getAddresses(), addresses)
            }
            
            return resource
        }

        async deleteById(resourceId: number): Promise<void> {
            await this._database.delete(this._vetsModel, {userId: resourceId})
            await this._database.delete(this._addressesModel, {userId: resourceId})
            await this._database.delete(this._usersModel, {userId: resourceId})
        }


        async readByWhere(email: string): Promise<ClientsEntity | undefined> {
            try{
                const users = await this._database.readByWhere(this._usersModel, {
                    email: email
                })
             
                return modelToEntity(users)
            } catch(err){
                throw new Error((err as Error).message);
            }
        }


        async groupClientsByCode(code: string): Promise<ClientsEntity | undefined> {
            const vetsByCode = await this._database.selectQuery(
                `
                SELECT * from vets v
                LEFT JOIN users u ON u.userId = v.userId

                where code = :code
                `,
                {
                    code
                }
            )
            
            return vetsByCode
            
        }
     
}

export default new ClientsRepository(
    MysqlDatabase.getInstance(),
    usersModel,
    vetsModel,
    addressesModel
)