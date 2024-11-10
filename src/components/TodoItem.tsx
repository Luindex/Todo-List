import {SetStateAction} from "react"
import {formatDate} from "../helpers"
import {TodoItemType, ListTodo} from "../types"

type TodoItemProps = {
  task: TodoItemType
  toggleComplete: (id: string) => void
  editItem: (id: string) => void
  tasks: ListTodo
  setTasks: React.Dispatch<SetStateAction<ListTodo>>
}

function TodoItem({
  task,
  toggleComplete,
  setTasks,
  tasks,
  editItem,
}: TodoItemProps) {
  const deleteItem = (id: TodoItemType["id"]) => {
    const updateItems = tasks.filter((t) => t.id !== id)
    setTasks(updateItems)
  }
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
          onChange={() => toggleComplete(task.id)}
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
          <button
            className=" bg-gray-400 rounded-md py-2 px-3 hover:bg-yellow-500 hover:-translate-y-1 transition-all"
            onClick={() => editItem(task.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="22"
              viewBox="0 0 24 24"
              style={{fill: "rgba(255, 255, 255, 1)"}}
            >
              <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
            </svg>
          </button>
          <button
            className=" bg-gray-400 rounded-md py-2 px-3  hover:bg-red-500 hover:-translate-y-1 transition-all"
            onClick={() => deleteItem(task.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{fill: "rgba(255, 255, 255, 1)"}}
            >
              <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
              <path d="M15.292 7.295 12 10.587 8.708 7.295 7.294 8.709l3.292 3.292-3.292 3.292 1.414 1.414L12 13.415l3.292 3.292 1.414-1.414-3.292-3.292 3.292-3.292z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoItem
