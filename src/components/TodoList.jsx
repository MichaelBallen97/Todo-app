import { useState } from "react"
import { todos } from "../utils/data"
import TodoItem from "./TodoItem"

function TodoList () {
  const [tasks, setTasks] = useState(todos)

  const handleChangeComplete = (task) => {
    const newTaks = tasks.map(t => {
      if(t.todo === task.todo) {
        return {...t, done: !t.done}
      } else {
        return t
      }

    })

    setTasks(newTaks)
  }

  return (
    <section className="todos-container">
      <ul>
      {
        tasks.map(task => (
          <li key={task.todo}> 
            <TodoItem
              onHandleComplete={handleChangeComplete}
              task={task}
            />
          </li>
        ))
      }
      </ul>
    </section>
  )
}

export default TodoList