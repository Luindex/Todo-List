// TaskItem.jsx

function TodoItem({task, onToggleComplete, onEdit, onDelete}) {
  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-sm ${
        task.completed ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="mr-4"
      />
      <div className="flex-1">
        <h2 className={`text-gray-800 ${task.completed ? "line-through" : ""}`}>
          {task.text}
        </h2>
        <p className="text-gray-500 text-sm">{task.date}</p>
      </div>
      <button
        onClick={() => onEdit(task.id)}
        className="text-gray-500 hover:text-gray-700 p-2"
      >
        📝
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-500 hover:text-gray-700 p-2"
      >
        🗑️
      </button>
    </div>
  )
}

export default TodoItem
