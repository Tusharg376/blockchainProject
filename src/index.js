const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes/route')
app.use(express.json())
mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://newdatabase:Gd6tycxuRBETdhM7@ourowncluster.jzinjug.mongodb.net/blockChain',{
    useNewUrlParser:true
})
    .then(()=> console.log("database connected"))
    .catch((err)=> console.log(err.massege))

app.use('/', routes)

app.listen(3000,function(){
    console.log("server is running on "+ 3000)
})
