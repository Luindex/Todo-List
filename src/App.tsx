import {ChangeEvent, FormEvent, useState} from "react"
import {DrafTodo, ListTodo} from "./types/index"
import TodoItem from "./components/TodoItem"

function App() {
  const [taskItem, setTaskItem] = useState<DrafTodo>({
    text: "",
    completed: false,
    createdTask: 0,
  })
  const [tasks, setTasks] = useState<ListTodo>([])

  const generateID = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskItem({
      ...taskItem,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (taskItem.text == "") {
      console.log("Error No puedes Enviar Tareas Vacias")
      return
    }

    const newTask = {
      ...taskItem,
      completed: false,
      id: generateID(),
      createdTask: Date.now(),
    }

    setTasks([...tasks, newTask])

    setTaskItem({
      text: "",
      completed: false,
      createdTask: 0,
    })
  }

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, completed: !task.completed} : task
      )
    )
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          TODO LIST
        </h1>

        <div className="">
          <form className="flex justify-between " onSubmit={handleSubmit}>
            <input
              className="mx-1  bg-slate-100 "
              type="text"
              name="text"
              id="text"
              value={taskItem.text}
              onChange={handleChange}
              placeholder="Add your Task..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Task
            </button>
          </form>
        </div>
        <div className="flex items-center justify-between mb-">
          <select className="bg-gray-200 mt-4 text-gray-700 p-2 rounded">
            <option>All</option>
            <option>Completed</option>
            <option>Incomplete</option>
          </select>
        </div>

        <div className="space-y-4 mt-3">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
