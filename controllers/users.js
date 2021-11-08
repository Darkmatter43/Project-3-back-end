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
               console.log(err.message)
               res.redirect('/')
          }else if(!foundUser){
               res.redirect('/')
          }else if(bcrypt.compareSync(req.body.password, foundUser.password)){
               res.json({username: foundUser.username})
          }else{
               console.log('something else happened')
               res.json({username: null})
          }
     })
})

user.get('/',(req,res)=>{
     User.find({},(err,foundUser)=>{
          res.json(foundUser)
     })
})

module.exports = user