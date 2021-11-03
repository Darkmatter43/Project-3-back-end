const mongoose=require('mongoose')


const gamesSchema=new mongoose.Schema({
    name:String,
    description:String,
    image:String,
    rating:Number
})

const Game=mongoose.model('Game',gamesSchema)

module.exports=Game