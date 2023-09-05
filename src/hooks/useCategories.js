import { useContext, useState } from "react";
import { TasksContext } from "../context/TaskContext";

function useCategories () {
  const [notification, setNotification] = useState(false)
  const { categories, setCategories, setTasks, initialTask, setSelectedCategory } =
  useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCategory = formData.get("category-name");
    setCategories([...categories, newCategory]);
    e.target.reset();

    setNotification(true);

    setTimeout(() => {
      setNotification(false);
    }, 5000);
  };

  const handleDelete = (category) => {
    const newCategories = categories.filter((c) => c != category);

    setCategories(newCategories);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    const newTasks = initialTask.current.filter(task => {
      if(task.categories.includes(category)) {
        return task
      }
    })

    setTasks(newTasks);
  };

  return {
    categories,
    handleDelete,
    handleFilter,
    handleSubmit,
    notification
  }
}

export default useCategories;