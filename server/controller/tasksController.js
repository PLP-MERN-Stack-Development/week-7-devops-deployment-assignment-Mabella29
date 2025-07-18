const Task = require('../Model/Task')


const getTasks = async (req,res) =>{
    const tasks = await Task.find()
    res.json(tasks)
}

const createTasks = async (req,res)=>{
    const tasks = new Task(req.body);
    await tasks.save()
    res.json(tasks)
}

const updateTasks = async (req,res) =>{
    const UpdatedTask = await Task.findByIdAndUpdate(req.params.id, req.body , {new:true})
    res.json(UpdatedTask)
}

const deleteTask = async (req,res)=>{
    const tasks = await Task.findByIdAndDelete(req.params.id)
    res.json(tasks)
}

module.exports = {getTasks, createTasks, updateTasks, deleteTask}