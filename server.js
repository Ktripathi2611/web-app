const express =require ('express')
const colors =require ('colors')
const dotenv = require('dotenv')
//config env
dotenv.config()
//rest object
const app = express()

//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'welcome to Konichiwa  sayonara APP'
    })
})

//port
const PORT =process.env.PORT || 2611
//run 
app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE}  port ${PORT}`.bgCyan.white)
})