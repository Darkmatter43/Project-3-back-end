const mongoose=require('mongoose')


const gamesSchema=new mongoose.Schema({
    name:String,
    description:String,
    image:String,
    players:Array,
    user: String
})

const Game=mongoose.model('Game',gamesSchema)

module.exports=Game