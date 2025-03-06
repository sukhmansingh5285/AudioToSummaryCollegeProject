import express from "express"
import cors from 'cors'
import dbConnection from "./dbConnection/dbConnection.js";
import { errorMiddleware } from "./errorHandling/error.js";

const app = express();

app.use(
  cors({
    origin:[process.env.FRONTEND_URL],  
    allowedHeaders: ["Content-Type"],
    methods:["POST", "GET", "DELETE", "PUT"], 
    credentials: true, 
  })
)

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(errorMiddleware)

dbConnection();
export default app