export default function TaskItem({task, onToggle, onDelete}){
    return(
        <li className="flex items-center justify-between p-2 border-b border-gray-700">
            <span onClick={()=>onToggle(task._id)} className={`flex-1 cursor-pointer select-none ${task.completed ? "line-through text-gray-500":""}`}>
                {task.text}

            </span>
            <button 
            className="ml-4 px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700" 
            onClick={()=>onDelete(task._id)}> 
                X
            </button>
        </li>
    )
}