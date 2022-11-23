import { randomBytes } from "crypto";
import multer, { Options } from "multer";
import path, { resolve } from "path";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({})

export const storageTypes = {
   /*
       dest: path.resolve(__dirname, '..', '..', '..', 'uploads'),
       local: multer.diskStorage({
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
    }),*/
    s3: multerS3({
        s3: s3,
        bucket: String(process.env.BUCKET_NAME),
        key: (req, file, callback) => {
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
        fileSize: 2 * 1024 * 1024 //2mb
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
   
} as Options

