import { useState } from "react"
import { todos } from "../utils/data"

function TodoList () {
  const [tasks, setTask] = useState(todos)

  return (
    <section className="todos-container">
      <ul>
      {
        tasks.map(task => (
          <li key={task.todo}> {task.todo} </li>
        ))
      }
      </ul>
    </section>
  )
}

export default TodoList