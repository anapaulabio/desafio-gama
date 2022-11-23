import * as Sequelize from "sequelize";
import { MysqlDatabase } from "../../mysql.database";

export default MysqlDatabase.getInstance().createModel('users', {
    userId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: Sequelize.DataTypes.STRING,
    code: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING,
    phoneNumber: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt:  Sequelize.DataTypes.DATE
});
