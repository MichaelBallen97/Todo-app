import { useContext, useState } from "react";
import { TasksContext } from "../context/TaskContext";

function useTodos () {
  const [notification, setNotification] = useState(false)
  const { tasks, setTasks, initialTask, selectedCategory } = useContext(TasksContext);
  
  const handleChangeComplete = (task) => {
    const newTaks = tasks.map((t) => {
      if (t.todo === task.todo) {
        return { ...t, done: !t.done };
      } else {
        return t;
      }
    });
  
    initialTask.current = initialTask.current.map((t) => {
      if (t.todo === task.todo) {
        return { ...t, done: !t.done };
      } else {
        return t;
      }
    });
  
    setTasks(newTaks);
  };
  
  const deleteTask = (todo) => {
    const newTasks = tasks.filter((task) => task.todo != todo.todo);
    initialTask.current = initialTask.current.filter((task) => task.todo != todo.todo);
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTodo = formData.get("todo-name");
    const todoCategory = formData.get("category");

    initialTask.current = [
      ...initialTask.current,
      { todo: newTodo, categories: ["Todas", todoCategory], done: false },
    ];

    if (todoCategory === selectedCategory || selectedCategory === "Todas") {
      setTasks([
        ...tasks,
        { todo: newTodo, categories: ["Todas", todoCategory], done: false },
      ]);
    }

    setNotification(true);

    setTimeout(() => {
      setNotification(false);
    }, 5000);
  };

  return {
    tasks,
    handleChangeComplete,
    deleteTask,
    handleSubmit,
    notification
  }
}

export default useTodos;
