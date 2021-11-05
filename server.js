const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const port=process.env.PORT||3001
const mongodbURI=process.env.MONGODB_URI
const app=express()

app.use(express.json())
app.use(cors())


const gamesController=require('./controllers/games.js')
const userController = require('./controllers/users')
app.use('/games',gamesController)
app.use('/user', userController)


app.get('/',(req,res)=>{
    res.redirect('/games')
})






app.listen(port,()=>{
    console.log('listening on port '+port);
})
mongoose.connect(mongodbURI,()=>{
    console.log('Connection with mongod established at',mongodbURI);
})