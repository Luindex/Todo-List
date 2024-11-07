export type TodoItemType = {
  id: string
  text: string
  completed: boolean
  createdTask: number
}

export type DrafTodo = Omit<TodoItemType, "id">

export type ListTodo = TodoItemType[]
