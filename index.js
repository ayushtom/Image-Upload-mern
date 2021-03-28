require('dotenv').config();
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');


const app = express();
app.use(cors());
app.use(express.json());

const uri= process.env.URI;
mongoose.connect(uri,{useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology:true});

const connection=mongoose.connection;
connection.once('open',() =>{
    console.log("mongodb connection established successfully");
})

//declaring uploads as static folder
app.use('/uploads', express.static('uploads'));


const uploadRouter=require('./controller/uploadRouter.js');
app.use('/',uploadRouter);

app.listen(5000 , ()=> {
    console.log("server is running on port 5000")
})