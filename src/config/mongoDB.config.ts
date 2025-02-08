import mongoose  from "mongoose";

export const connectDB = ()=> {
    try {
        mongoose.connect("mongodb://localhost:27017/todo-list")
        console.log("Connect to mongoDB")
    } catch (error){
        console.log(error)
    }
}