import express from "express"
import { connectDB } from "../config/mongoDB.config"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB()

app.listen('8080', ()=>{
    console.log("Server on port 8080")
})


