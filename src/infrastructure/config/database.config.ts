import "dotenv/config";

const databaseConfig = {
    host: String(process.env.DB_HOST),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASS),
    port: Number(process.env.DB_PORT),
    database: String(process.env.DB_NAME),
    dialect: 'mysql'
}

export default databaseConfig;

module.exports = databaseConfig;