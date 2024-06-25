import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors'; 
import bodyParser from 'body-parser'; 
import connectDB from './db/connect';
const app: Application = express();

app.use(cors());

app.use(bodyParser.json()); // Parse JSON requests

connectDB();

import appRouter from "./routes/index";

app.get('/', (req: Request, res: Response) => {
  res.json({message : "hi there"});
});

app.use("/api/v1" , appRouter);

app.listen(3000, () => console.log('Server listening on port 3000'));
