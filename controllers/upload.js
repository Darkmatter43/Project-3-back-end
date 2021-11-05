const express = require('express')
const router = express.Router()
const GridFsStorage = require('multer-gridfs-storage')
const MongoClient = require('mongodb').MongoClient
const GridFsBucket = require('mongodb').GridFSBucket
const upload = require('../middleware/upload.js')
require('donenv').config()

const url = process.env.MONGODB_URI;
const baseUrl = '' /// not sure what to set this to

const mongoClient = new MongoClient(url)

const uploadFiles =  async (req, res) => {
     try {
          await upload(req, res)
          console.log(req.file)

          if (req.file === undefined) {
               return res.send({message: "You must select a file."})
          }else{
               return res.send({message: "File has been uploaded."})
          }
     } catch(error) {
       console.log(error);
       return res.send({message: "Error when trying to upload image: " + error})
     }
}

const getListFiles = async(req, res) => {
     
}