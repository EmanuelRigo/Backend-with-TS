import express from "express"
import { connectDB } from "./config/mongoDB.config"
import indexRouter from './routes/index.router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB()

app.use("/api", indexRouter)

app.listen('8080', ()=>{
    console.log("Server on port 8080")
})


