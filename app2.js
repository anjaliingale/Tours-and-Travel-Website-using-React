const express=require('express');
const app = express();

const model = require('./model2');

const cors = require('cors');
app.use(cors());

app.use(express.json());

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Internship")

app.get(('/'),(req, res)=>
    res.send("server connected")
    )

//POST
app.post('/users', async(req, res)=>{
    const{ mobile, password }=req.body;
        
    try{
            const users = new model({
             mobile, password
        });
            const data=await users.save();
            res.status(200).send({data})
        }
        catch(error){
            console.log(error)
        }
})

const PORT=5000
app.listen(PORT,()=>{
    console.log(`app listen on port ${PORT}`)
})