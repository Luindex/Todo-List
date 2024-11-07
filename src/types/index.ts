export type TodoItemType = {
  id: string
  text: string
  completed: boolean
}

export type DrafTodo = Omit<TodoItemType, "id">

export type ListTodo = TodoItemType[]
