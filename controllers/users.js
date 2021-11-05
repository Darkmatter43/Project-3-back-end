const express = require('express')
const bcrypt = require('bcrypt')
const user = express.Router()
const User = require('../models/users.js')

user.post('/new', (req, res) => {
     req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
     User.create(req.body, (err, createdUser) => {
          if(err){
               res.send(err.message)
          }else{
               console.log(createdUser)
               res.json(createdUser)
          }
     })
})

user.post('/login', (req, res) => {
     User.findOne({username: req.body.username}, (err, foundUser) => {
          if(err){
               res.send(err.message)
          }else if(bcrypt.compareSync(req.body.password, foundUser.password)){
               res.json({username: foundUser.username})
          }else{
               res.sendStatus(401)
          }
     })
})

user.get('/',(req,res)=>{
     User.find({},(err,foundUser)=>{
          res.json(foundUser)
     })
})

module.exports = user