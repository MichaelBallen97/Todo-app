import { createContext, useRef, useState } from "react";
import { categories, todos } from "../utils/data";

export const TasksContext = createContext();

function TaskProvider({ children }) {
	const [tasks, setTasks] = useState(todos);
	const [categoriesList, setCategoriesList] = useState(categories);
	const [selectedCategory, setSelectedCategory] = useState("Todas");
	const firstTasks = useRef(tasks);

	return (
		<TasksContext.Provider
			value={{
				tasks,
				setTasks,
				categories: categoriesList,
				setCategories: setCategoriesList,
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
