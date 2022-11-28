import * as Sequelize from "sequelize";

export default {
    up:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('users', {
            userId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.DataTypes.STRING,
            code: Sequelize.DataTypes.STRING(10),
            email: {
                type: Sequelize.DataTypes.STRING,
                unique: true,
            },
            password: Sequelize.DataTypes.STRING,
            phoneNumber: Sequelize.DataTypes.STRING(12),
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt:  Sequelize.DataTypes.DATE
        })
    },
    down:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('users')
    }
}