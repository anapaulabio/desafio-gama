import "dotenv/config";

const uploadConfig = {
    region: process.env.AWS_DEFAULT_REGION, 
    accessKeyId: String(process.env.AWS_ACCESS_KEY_ID), 
    secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY),
    bucketName: String(process.env.BUCKET_NAME)
}

export default uploadConfig
