import * as Sequelize from "sequelize";

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('vets', {
            vetId: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'vet_id'
            },
            userId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName:'users'
                    },
                    key: 'user_id'
                },
            },
            specialty: Sequelize.DataTypes.STRING,
            CRMV: Sequelize.DataTypes.STRING,
            queryValue: {
                type: Sequelize.DataTypes.INTEGER,
                field: "query_value"
            },
            whatsappLink: {
                type:Sequelize.DataTypes.STRING,
                field: "whatsapp_link"
            },
            experience: Sequelize.DataTypes.STRING,
            teleconsultation: Sequelize.DataTypes.BOOLEAN
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('vets')
    }
}