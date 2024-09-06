const express=require('express');
const app = express();

const model = require('./model');

const cors = require('cors');
app.use(cors());

app.use(express.json());

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Ashish")

app.get(('/'),(req, res)=>
    res.send("server connected")
    )

//POST
app.post('/users', async(req, res)=>{
    const{name, email, subject, message}=req.body;
        
    try{
            const users = new model({
                name, email, subject, message
        });
            const data=await users.save();
            res.status(200).send({data})
        }
        catch(error){
            console.log(error)
        }
})
//GET
app.get('/findall',async(req, res)=>
{
    try{
    const userData =await model.find();
    res.status(200).send({userData})
    }
    catch(err){
    console.log(err);
    res.status(500).send(err);
}});
//DELETE
app.delete('/delete/:_id',async(req, res)=>{
    const id= req.params
    let data=await model.deleteOne(id)
    res.send(data)    
});

//UPDATE
app.put('/update/:_id', async(req, res)=>{
    let data= await model.updateOne(req.params,
        {
            $set: req.body
        })
        res.send(data);
})
const PORT=5000
app.listen(PORT,()=>{
    console.log(`app listen on port ${PORT}`)
})