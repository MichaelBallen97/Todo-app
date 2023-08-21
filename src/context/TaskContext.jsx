import { createContext, useState } from "react";
import { categories, todos } from "../utils/data";

export const TasksContext = createContext();

function TaskProvider({ children }) {
	const [tasks, setTasks] = useState(todos);
	const [categoriesList, setCategoriesList] = useState(categories);

	return (
		<TasksContext.Provider
			value={{
				tasks,
				setTasks,
				categories: categoriesList,
				setCategories: setCategoriesList,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
}

export default TaskProvider;