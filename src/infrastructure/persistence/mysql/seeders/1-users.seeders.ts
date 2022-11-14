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
                "phoneNumber": 56030,
                "whatsappLink": "whatsapp/74992856030/link.com"
            },
            {
                "userId": 2,
                "name": "Mariana Kolscheck",
                "code": "32676265",
                "email": "mkolscheck@gmail.com",
                "password": "12345678",
                "phoneNumber": 119812,
                "whatsappLink": "whatsapp/11981456322/link.com"
            },
            {
                "userId": 3,
                "name": "Angelo Marcos Oliveira",
                "code": "01001000",
                "email": "oliveira_angelo@gmail.com",
                "password": "12345678",
                "phoneNumber": 8999865,
                "whatsappLink": "whatsapp/89998654777/link.com"
            },
            {
                "userId": 4,
                "name": "Maria Julia Matos Abreu",
                "code": "48730000",
                "email": "matos_julia@gmail.com",
                "password": "12345678",
                "phoneNumber": 4998145,
                "whatsappLink": "whatsapp/49981458900/link.com"
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('users', {});
    }
}