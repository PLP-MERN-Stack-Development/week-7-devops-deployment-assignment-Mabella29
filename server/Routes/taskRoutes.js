const {getTasks, createTasks, updateTasks, deleteTask} = require('../controller/tasksController')
const express = require('express')
const Router = express.Router()

Router.get('/', getTasks)

Router.post('/', createTasks)

Router.put('/:id', updateTasks)

Router.delete('/:id', deleteTask)


module.exports = Router;