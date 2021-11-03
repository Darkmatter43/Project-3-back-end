const express=require('express')
const router=express.Router()
const Game = require('../models/games.js')


router.get('/',(req,res)=>{
    Game.find({},(err,foundGame)=>{
        res.json(foundGame)
    })
})

router.post('/',(req,res)=>{
    Game.create(req.body,(err,createdGame)=>{
        res.json(createdGame)
    })
})

router.delete('/:id',(req,res)=>{
    Game.findByIdAndRemove(req.params.id,(err,deletedGame)=>{
        res.json(deletedGame)
    })
})

router.put('/:id',(req,res)=>{
    Game.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedGame)=>{
        res.json(updatedGame)
    })
})

module.exports=router