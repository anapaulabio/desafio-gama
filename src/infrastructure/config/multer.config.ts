import { randomBytes } from "crypto";
import  { diskStorage, Options } from "multer";
import { resolve } from "path";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: process.env.AWS_DEFAULT_REGION });

export const multerConfig = {
    dest: resolve(__dirname, '..', '..', '..', 'uploads'),
    storage: diskStorage({
        destination:(req, file, callback) => {
            callback(null, resolve(__dirname, '..', '..', '..', 'uploads'))
        },
        filename: (req, file, callback) => {
            randomBytes(16, (error, hash) =>{
                if(error) {
                    callback(error, file.filename)
                }
                const filename = `${hash.toString('hex')}.png`
                callback(null, filename)
            })
        }
    }),
    limits:{
        fileSize: 4 * 1024 * 1024 //4mb
    },
    fileFilter: (req, file, callback) => {
        const formats = [
            'image/jpeg',
            'image/jpg',
            'image/png',
        ];

        if (formats.includes(file.mimetype)) {
            callback(null,true)
        } else {
            callback (new Error ('format not accepted'))
        }
    }
} as Options;
   /* public static upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: String(process.env.BUCKET_NAME),
            key: (req, file, callback) => {
                randomBytes(16, (error, hash) => {
                    if (error) {
                        callback(error, file.filename)
                    }
                    const filename = `${hash.toString('hex')}.png`
                    callback(null, filename)
                })
            }
        })
    */