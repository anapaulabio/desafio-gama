import "dotenv/config";

const uploadConfig = {
    region: process.env.AWS_DEFAULT_REGION, 
    accessKeyId: String(process.env.AWS_ACCESS_KEY_ID), 
    secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
}

export default uploadConfig
