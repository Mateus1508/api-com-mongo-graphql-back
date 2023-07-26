import express from "express";
import { Response } from 'express';
import { router } from "./routes";
import dotenv from 'dotenv';
import { db } from "./database/db";

const app = express();

app.use(express.json());
app.use(router);
dotenv.config();

db();

app.listen(process.env.PORT, () => console.log('API started'));
app.get('/', (req, res: Response) => {
    return res.status(200).json({message: 'Welcome to API'})
});