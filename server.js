const express = require('express')
const ejs = require('ejs')
const mainRoutes = require('./routes/mainRoutes')
const path = require('path')
const cors = require('cors')
const mongoose = require("mongoose");
const connectDB = require("./config/database");


const app = express()
app.set('view engine' , 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.static('js'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
require("dotenv").config({ path: "./config/.env" });



app.use(cors())
app.use('/', mainRoutes)

mongoose.set('strictQuery', false);
connectDB()

app.listen(process.env.PORT || 1337, ()=>{
    console.log('Server is running.')
})    