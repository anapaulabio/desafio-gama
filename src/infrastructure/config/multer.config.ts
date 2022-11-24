import { randomBytes } from "crypto";
import multer, { diskStorage, Options } from "multer";
import { resolve } from "path";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({ 
    region: process.env.AWS_DEFAULT_REGION, 
    credentials: { 
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID), 
        secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
    } 
});

/* export const multerConfig = {
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
} as Options;*/
export const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: String(process.env.BUCKET_NAME),
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            randomBytes(16, (error, hash) => {
                if (error) {
                    cb(error, file.filename)
                }
                const filename = `${hash.toString('hex')}.png`
                cb(null, filename)
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
})