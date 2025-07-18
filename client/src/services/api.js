import axios from "axios";

// creates a baseURL, whenever you want to make http requests,
// this link would be in front
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL 
    ? `${import.meta.env.VITE_API_URL}/api`
    : "http://localhost:5000/api"
});

//get all the tasks in http://localhost/api/tasks route
export const getTasks = ()=> API.get('/tasks')

// add the task the user creates to the route http://localhost/api/tasks
export const createTasks = (task) => API.post('/tasks',task)

// e.g, get me the task at http://localhost/api/tasks/123 and update it
export const updateTasks = (id,task) => API.put(`/tasks/${id}`, task)

// remove the task with this id
export const deleteTask = (id)=> API.delete(`/tasks/${id}`)