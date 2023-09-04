import AddTodoForm from "./AddTodoForm";
import useCategories from "../hooks/useCategories";
import useTodos from "../hooks/useTodos";
import { useState } from "react";

function AddTodo() {
	const [showModal, setShowModal] = useState(false);
	const { categories } = useCategories();
	const { handleSubmit } = useTodos();
	
	return (
		<section className="add-todo-button">
			<label>
				<button onClick={() => setShowModal(true)}>+</button>
				<span> Agregar nueva tarea </span>
			</label>
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
