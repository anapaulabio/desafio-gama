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
            avatar: Sequelize.DataTypes.STRING,
            specialty: Sequelize.DataTypes.STRING,
            crmv: Sequelize.DataTypes.STRING,
            aboutMe: Sequelize.DataTypes.STRING(300),
            queryValue: Sequelize.DataTypes.INTEGER,
            queryDutyValue: Sequelize.DataTypes.INTEGER,
            formation: Sequelize.DataTypes.STRING,
            experience: Sequelize.DataTypes.STRING(300),
            teleconsultation: Sequelize.DataTypes.BOOLEAN,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt:  Sequelize.DataTypes.DATE
        })
    },
    down:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('vets')
    }
}