import * as Sequelize from "sequelize";

export default {
    up:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('vets', {
            vetId: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'users'
                    },
                    key: 'userId'
                },
                unique: true
            },
            specialty: Sequelize.DataTypes.STRING,
            crmv: Sequelize.DataTypes.STRING,
            queryValue: Sequelize.DataTypes.INTEGER,
            formation: Sequelize.DataTypes.STRING,
            experience: Sequelize.DataTypes.STRING,
            teleconsultation: Sequelize.DataTypes.BOOLEAN,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt:  Sequelize.DataTypes.DATE
        })
    },
    down:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('vets')
    }
}