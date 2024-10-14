const express = require('express')
const mongoose = require('mongoose')
const User = require("../Backend/models/User")
const cors = require('cors')

mongoose.connect("mongodb://127.0.0.1:27017/demo")
.then(()=>console.log("Mongo db is connected")
).catch((err)=>console.log(err))

const app = express();

app.use(express.json())
app.use(cors())

app.post('/', (req, res)=>{
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(4400, (req, res)=>{
    console.log("Server is working");
    
})
