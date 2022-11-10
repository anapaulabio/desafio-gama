import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('addresses', {
            addressId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'address_id'
            },
            code: Sequelize.DataTypes.STRING,
            address: Sequelize.DataTypes.STRING,
            complement: Sequelize.DataTypes.STRING,
            district: Sequelize.DataTypes.STRING,
            city: Sequelize.DataTypes.STRING,
            state: Sequelize.DataTypes.STRING,
            userId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'users'
                    },
                    key: 'user_id'
                },
            } 
        })
    },
    down: (queryInterface: Sequelize.QueryInterface)=> {
        return queryInterface.dropTable('addresses')
    }
};