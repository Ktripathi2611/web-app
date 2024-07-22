
const mongoose = require("mongoose");
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        
console.log(`MongoDB connected: ${conn.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`Error: ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;
