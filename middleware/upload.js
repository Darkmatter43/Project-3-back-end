// THIS CODE COURTESY OF TUTORIAL FROM 
// https://www.bezkoder.com/node-js-upload-store-images-mongodb/#Further_Reading
// THIS CODE IS NOT MY OWN

const util = require('util')
const multer = require('multer')
const {GridFsStorage} = require("multer-gridfs-storage")
require('dotenv').config()

const storage = new GridFsStorage({
     url: process.env.MONGODB_URI,
     options: { useNewURLParser: true, useUnifiedTopology: true},
     file: (req, file) => {
          const match = ["image/png", "img/jpeg"]

          if(match.indexOf(file.mimetype) === -1){
               const filename = `${Date.now()}-squadup-${file.originalname}`
               return filename;
          }else{
               return { 
                    bucketName: "photos",
                    filename: `${Date.now()}-squadup-${file.originalname}`
               }
          }
     }
})

const uploadFiles = multer({storage: storage}).single("file");
const uploadFilesMiddleware = util.promisify(uploadFiles);

module.exports = uploadFilesMiddleware;