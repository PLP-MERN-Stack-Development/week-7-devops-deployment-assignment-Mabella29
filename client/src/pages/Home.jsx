import { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import {getTasks, createTasks, updateTasks, deleteTask} from "../services/api"

export default function Home(){
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState("")

    useEffect(()=>{
        loadTasks();

    },[])

    const loadTasks = async ()=>{
        const res = await getTasks();
        setTasks(res.data)
    }

    const handleAdd = async ()=>{
        const trimmed = text.trim()
        if(!trimmed) return;
        const isDuplicated = tasks.some(task=> task.text.toLowerCase === trimmed.toLowerCase)
        if(isDuplicated) {
            alert('Task already exists')
            return;
        } 
        const res = await createTasks({text, completed:false})
        setTasks(prev => [...prev, res.data])
        setText("")
    }

    const handleToggle = async (id)=>{
        const task = tasks.find((t)=> t._id === id)
        const res = await updateTasks(id,{...task, completed:!task.completed})
        setTasks(prev => prev.map(t=> t._id === id? res.data:t))
    }

    const handleDelete = async (id)=>{
        await deleteTask(id)
        setTasks(prev => prev.filter(t => t._id !== id))
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-10"> 
        <div className="max-w-xl mx-auto space-y-6 bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center">
                Quick Tasks
            </h1>

            <div className="flex gap-3 mb-4">
                <input 
                    className="flex-1 p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                    value={text}
                    placeholder="Enter a task..."
                    onChange={(e)=> setText(e.target.value)}
                />

                <button 
                onClick={handleAdd}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-200"
                >Add Task</button>
            </div>

            <ul className="space-y-3">
                {tasks.map((task)=>(
                    <TaskItem
                        key={task._id} 
                        task ={task} 
                        onToggle={handleToggle} 
                        onDelete={handleDelete}/>
                ))}
            </ul>
            </div>
        </div>
    )
}