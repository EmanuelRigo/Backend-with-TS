import { Router } from "express";
import taskDao from "../dao/task.dao";

const router = Router()


router.get("/", async(req, res)=> {
    try {
        const tasks = await taskDao.getAll()
        res.status(200).json({status: "ok", payload: tasks})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.get("/:id", async(req, res)=> {
    try {
        const {id} = req.params
        const task = await taskDao.getOne({_id: id})
        res.status(200).json({status: "ok", payload: task})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.get("/", async(req, res)=> {
    try {
        const tasks = await taskDao.getAll()
        res.status(200).json({status: "ok", payload: tasks})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.get("/", async(req, res)=> {
    try {
        const tasks = await taskDao.getAll()
        res.status(200).json({status: "ok", payload: tasks})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.get("/", async(req, res)=> {
    try {
        const tasks = await taskDao.getAll()
        res.status(200).json({status: "ok", payload: tasks})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
})


export default router