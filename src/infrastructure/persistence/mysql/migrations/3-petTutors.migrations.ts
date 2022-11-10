import * as Sequelize from "sequelize";

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('pet_tutors', {
            petTutorId: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'pet_tutor_id'
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
            cpf: {
                type: Sequelize.DataTypes.STRING,
                unique: true,
            },
            phoneNumber: {
                type: Sequelize.DataTypes.INTEGER,
                field: 'phone_number'
            }
        })
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('pet_tutors')
    }
}