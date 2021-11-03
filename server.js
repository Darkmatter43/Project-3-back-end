const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

app.use(express.json())
app.use(cors())


const gamesController=require('./controllers/games.js')
app.use('/games',gamesController)

app.get('/',(req,res)=>{
    res.redirect('/games')
})






app.listen(3001,()=>{
    console.log('listening on port 3001');
})
mongoose.connect('mongodb://localhost:27017/games')
mongoose.connection.once('open',()=>{
    console.log('connection to mongod...');
})