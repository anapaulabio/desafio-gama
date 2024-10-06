import * as Sequelize from "sequelize";

export default {
    up:(queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkInsert('vets', [
            {
                "userId": 1,
                "specialty": "clinica geral",
                "crmv": 12345678,
                "aboutMe": "olá",
                "queryValue": 150,
                "queryDutyValue": 200,
                "formation": "Universidade Federal do Reconcavo Bahiano",
                "experience": "7 anos na empresa tal, 1 ano na empresa tal",
                "teleconsultation": true
            },
            {
                "userId": 2,
                "specialty": "dermatologia",
                "crmv": 98745612,
                "aboutMe": "lorem Ips ",
                "queryValue": 400,
                "queryDutyValue": 450,
                "formation": "Universidade Paulista",
                "experience": "Lorem ipsum dolor sit amet con la plate cursus",
                "teleconsultation": false
            },
            {
                "userId": 3,
                "specialty": "animais silvestres",
                "crmv": 19456237,
                "aboutMe": "Lorem ipsum dolor sit",
                "queryValue": 500,
                "queryDutyValue": 550,
                "formation": "Faculdade do Sul ",
                "experience": "Lorem ipsum dolor sit amet con la plate cursus lorem al amet dolor sit", 
                "teleconsultation": true
            },
            {   
                "userId": 4,
                "specialty": "bovinos e equinos",
                "crmv": 45612897,
                "aboutMe": "Lorem ipsum dolor sit",
                "queryValue": 500,
                "queryDutyValue": 550,
                "formation": "Faculdade do norte",
                "experience": "Lorem ipsum dolor sit amet con la plate cursus lorem al amet dolor sit key dolor",
                "teleconsultation": false
            }
        ])
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.bulkDelete('vets', {});
    }
}