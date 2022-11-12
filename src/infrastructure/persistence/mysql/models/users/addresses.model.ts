import * as Sequelize from "sequelize";
import { MysqlDatabase } from "../../mysql.database";

export default MysqlDatabase.getInstance().createModel('addresses', {
    addressId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        field: 'address_id',
    },
    code: Sequelize.DataTypes.STRING,
    address: Sequelize.DataTypes.STRING,
    complement: Sequelize.DataTypes.STRING,
    district: Sequelize.DataTypes.STRING,
    city: Sequelize.DataTypes.STRING,
    state: Sequelize.DataTypes.STRING,
});