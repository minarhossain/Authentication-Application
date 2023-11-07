import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import cors from 'cors';
dotenv.config();

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());



async function main() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected DB")
        app.listen(PORT, () => {
            console.log(`Server is Running http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log("Connection Error", error);
    }
}
main()




app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);



// Security Middleware

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});
