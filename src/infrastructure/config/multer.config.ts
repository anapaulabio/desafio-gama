import { randomBytes } from "crypto";
import { diskStorage, Options } from "multer";
import { resolve } from "path";



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
        fileSize: 8 * 1024 * 1024 //8mb
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