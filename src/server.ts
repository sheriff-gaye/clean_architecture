import express from "express"
import http from "http"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import compression from "compression"
import cors from "cors"
import { router } from "./infrastructure/routes"
import { connectToDatabase } from './infrastructure/config/config';


const app=express();

app.use(cors())
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser());

const server=http.createServer(app);

app.use(router)


connectToDatabase();

const port =6060

server.listen(port,()=>{
    console.log('Server running on http://localhost:6060')
})






