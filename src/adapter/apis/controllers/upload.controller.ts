import express from 'express';
import crypto from 'crypto'
import sharp from 'sharp'
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"
import uploadConfig from '../../../infrastructure/config/upload.config';

const s3Client = new S3Client({
    region: uploadConfig.region,
    credentials: {
        accessKeyId: uploadConfig.accessKeyId,
        secretAccessKey: uploadConfig.secretAccessKey
    }
})

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

class UploadController {
    async createImage(req: express.Request, res: express.Response) {
        const file = req.file
        const caption = req.body.caption

        const fileBuffer = await sharp(file!.buffer)
            .resize({ height: 1920, width: 1080, fit: "contain" })
            .toBuffer()

        const fileName = generateFileName()
        const uploadParams = {
            Bucket: uploadConfig.bucketName,
            Body: fileBuffer,
            Key: fileName,
            ContentType: file!.mimetype
        }
        // Send the upload to S3
        await s3Client.send(new PutObjectCommand(uploadParams));

        res.status(201).send(uploadParams.Key)

    }
}

export default new UploadController()