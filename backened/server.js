const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app= express();
const port = process.env.PORT || 3000;

//midleware
app.use(cors());
app.use(express.json())

//Connect to our database.
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    // {useNewUrlParser:true, useCreateIndex: true}
    );
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Mongodb  database connection established successfully')
})


//Routes
const excercisesRouter = require('./routes/excercises');
const userRouter = require('./routes/users');

app.use('/excercises', excercisesRouter);
app.use('/users',userRouter);

app.listen(port, ()=>{
    console.log(`Server running in ${port}`)
});