import {formatDate} from "../helpers"
import {TodoItemType} from "../types"

type TodoItemProps = {
  task: TodoItemType
  toggleComplete: (id: string) => void
}

function TodoItem({task, toggleComplete}: TodoItemProps) {
  return (
    <>
      <div
        className={`flex items-center p-4 rounded-lg shadow-sm ${
          task.completed ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)} // Llama a toggleComplete al cambiar el checkbox
          className="mr-4"
        />
        <div className="flex-1">
          <h2
            className={`text-gray-800 ${task.completed ? "line-through" : ""}`}
          >
            {task.text}
          </h2>
          <p className="text-gray-500 text-sm">
            {formatDate(task.createdTask)}
          </p>
        </div>
        <div className=" flex gap-3">
          <button className=" bg-gray-400 rounded-md py-2 px-3">x</button>
          <button className=" bg-gray-400 rounded-md py-2 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="22"
              viewBox="0 0 24 24"
              style={{fill: "rgba(255, 255, 255, 1)"}} //todo
            >
              <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoItem

/*
<div
      className={`flex items-center p-4 rounded-lg shadow-sm ${
        task.completed ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      <input type="checkbox" checked={task.completed} className="mr-4" />
      <div className="flex-1">
        <h2 className={`text-gray-800 ${task.completed ? "line-through" : ""}`}>
          {task.text}
        </h2>
        <p className="text-gray-500 text-sm">{formatDate(task.createdTask)}</p>
      </div>
      <button className="text-gray-500 hover:text-gray-700 p-2">📝</button>
      <button className="text-gray-500 hover:text-gray-700 p-2">🗑️</button>
    </div>
*/
