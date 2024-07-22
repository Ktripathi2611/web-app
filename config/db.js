const mongoose =require ("mongoose")
const colors =require ('colors')
const connectDB =async () =>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongo db connected ${conn.connection.host}`.bgCyan.white)
    } catch (error) {
     console.log(`error ${error.message}`,colors.bgRed.white)   
    }
}