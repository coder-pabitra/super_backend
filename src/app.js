import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"18kb"}))

export {app}