const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors({origin:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello from server")
})
const DataBase = async ()=>{
    await mongoose.connect('mongodb+srv://pavanganesh:pavanganesh@cluster0.axrs7n2.mongodb.net/?retryWrites=true&w=majority').then(
        ()=>{
            console.log("Connected to the dataBase")
        }
    ).catch(
        (error)=>{
            console.log(error);
        }
    )
}
DataBase();
app.listen(3030,()=>{console.log("Server  is running on the port 3030")})