import dotenv from 'dotenv'
dotenv.config()

const uploadConfig = {
    bucketName: process.env.BUCKET_NAME,
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: String(process.env.AWS_ACCESS_KEY),
    secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY), 
}

export default uploadConfig




