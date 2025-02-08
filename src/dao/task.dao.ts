import { idText } from "typescript"
import { taskModel } from "../models/task.model"

const getAll = async ()=> {
 return await taskModel.find()
}
const getOne = async (query: any)=> {
return await taskModel.findOne(query)
}
const create = async (data: any)=> {
return await taskModel.create(data)
}
const update = async (id: any, data: any)=> {
return await taskModel.findByIdAndUpdate(id, data)
}
const remove = async (id: any)=> {
return await taskModel.findByIdAndDelete(id)
}
