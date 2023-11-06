import express from 'express';
const app = express();

const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ Name: "Minar Hossain", status: "Express Server started" })
})

app.listen(PORT, () => {
    console.log(`Server is Running http://localhost:${PORT}`)
})