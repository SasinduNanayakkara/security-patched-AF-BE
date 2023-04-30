import express from "express";
import helmet from  'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from "./database/database";
import routes from "./Routes/index.routes";

const app = express();
dotenv.config();
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => res.status(200).json({message: 'AF Server up and Running'}));

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`AF Server running on port ${PORT}`));