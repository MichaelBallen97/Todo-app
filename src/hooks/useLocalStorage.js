import { useEffect, useState } from "react";

function useLocalStorage() {
	const [todos, setTodos] = useState(
		localStorage.getItem("todos") === null
			? []
			: JSON.parse(localStorage.getItem("todos"))
	);
	const [categories, setCategories] = useState(
		localStorage.getItem("categories") === null
			? ["Todas"]
			: JSON.parse(localStorage.getItem("categories"))
	);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		localStorage.setItem("categories", JSON.stringify(categories));
	}, [categories]);

	return {
		todos,
		categories,
		setTodos,
		setCategories,
	};
}

export default useLocalStorage;
