
import { File } from 'multer';
import { NextApiRequest } from 'next';

declare global {
    namespace NodeJS {
        interface Global {
            multerFile: File; 
        }
    }
}


declare module 'next' {
    interface NextApiRequest {
        file?: File; 
    }
}
