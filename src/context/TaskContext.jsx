import { createContext, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TasksContext = createContext();


function TaskProvider({ children }) {
	const { todos, setTodos, categories, setCategories } = useLocalStorage();
	const [selectedCategory, setSelectedCategory] = useState("Todas");
	const firstTasks = useRef(todos);

	return (
		<TasksContext.Provider
			value={{
				tasks: todos,
				setTasks: setTodos,
				categories,
				setCategories,
				initialTask: firstTasks,
				selectedCategory: selectedCategory,
				setSelectedCategory: setSelectedCategory,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
}

export default TaskProvider;
