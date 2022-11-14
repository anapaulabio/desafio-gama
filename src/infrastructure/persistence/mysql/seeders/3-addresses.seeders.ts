import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('addresses', [
            {
                "userId": 1,
                "code": "35530000",
                "address": "",
                "complement": "",
                "district": "",
                "city": "Cláudio",
                "state": "MG"
            },
            {
                "userId": 2,
                "code": "32676265",
                "address": "Avenida Juiz Marco Túlio Isaac",
                "complement": "",
                "district": "Laranjeiras",
                "city": "Betim",
                "state": "MG"
            },
            {
                "userId": 3,
                "code": "01001000",
                "address": "Praça da Sé",
                "complement": "",
                "district": "Sé",
                "city": "São Paulo",
                "state": "SP"
            },
            {
                "userId": 4,
                "code": "48730000",
                "address": "",
                "complement": "",
                "district": "",
                "city": "Conceição do Coité",
                "state": "BA"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('addresses', {});
    }
};