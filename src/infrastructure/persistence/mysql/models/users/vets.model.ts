import * as Sequelize from "sequelize";
import { MysqlDatabase } from "../../mysql.database";

export default MysqlDatabase.getInstance().createModel('vets', {
    vetId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    userId: Sequelize.DataTypes.INTEGER,
    avatar: Sequelize.DataTypes.STRING,
    specialty: Sequelize.DataTypes.STRING,
    crmv: Sequelize.DataTypes.STRING,
    aboutMe: Sequelize.DataTypes.STRING,
    queryValue: Sequelize.DataTypes.INTEGER,
    queryDutyValue: Sequelize.DataTypes.INTEGER,
    formation: Sequelize.DataTypes.STRING,
    experience: Sequelize.DataTypes.STRING,
    teleconsultation: Sequelize.DataTypes.BOOLEAN,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt:  Sequelize.DataTypes.DATE
});