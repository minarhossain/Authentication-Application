import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ Name: "Minar Hossain", status: "Express Server started" })
})

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