import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Importing connectDB utility from './config/db.js'
import connectDB from './config/db.js';

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to database
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
