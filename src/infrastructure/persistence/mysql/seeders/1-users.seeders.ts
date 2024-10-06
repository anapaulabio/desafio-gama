import * as Sequelize from "sequelize";

export default {
    up:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('users', [
            {
                "userId": 1,
                "name": "Antônio José Silva",
                "code": "35530000",
                "email": "jose_antonio@outlook.com",
                "password": "12345678",
                "phoneNumber": "74992856030"
            },
            {
                "userId": 2,
                "name": "Mariana Kolscheck",
                "code": "32676265",
                "email": "mkolscheck@gmail.com",
                "password": "12345678",
                "phoneNumber": "11981456322",
            },
            {
                "userId": 3,
                "name": "Angelo Marcos Oliveira",
                "code": "01001000",
                "email": "oliveira_angelo@gmail.com",
                "password": "12345678",
                "phoneNumber": "89998654777",
            },
            {
                "userId": 4,
                "name": "Maria Julia Matos Abreu",
                "code": "48730000",
                "email": "matos_julia@gmail.com",
                "password": "12345678",
                "phoneNumber": "49981458900",
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('users', {});
    }
}