import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from "./database/database";
import routes from "./Routes/index.routes";



const app = express();
var corsOptions = {
    origin: 'http://localhost:3000/',
}
app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to MongoDB
connectDB();
app.get('/', (req, res) => res.status(200).json({message: 'AF Server up and Running'}));

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`AF Server running on port ${PORT}`));