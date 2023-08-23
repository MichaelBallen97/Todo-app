import { useContext, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { TasksContext } from "../context/TaskContext";

function AddTodo() {
	const { categories, tasks, setTasks } = useContext(TasksContext);
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const newTodo = formData.get("todo-name");
		const todoCategory = formData.get("category");

		setTasks([
			...tasks,
			{ todo: newTodo, categories: ["Todas", todoCategory], done: false },
		]);
	};

	return (
		<section className="add-todo-button">
			<button onClick={() => setShowModal(true)}>+</button>
			{showModal && (
				<AddTodoForm
					setShowModal={setShowModal}
					categories={categories}
					handleSubmit={handleSubmit}
				/>
			)}
		</section>
	);
}

export default AddTodo;
