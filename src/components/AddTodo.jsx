import AddTodoForm from "./AddTodoForm";
import useCategories from "../hooks/useCategories";
import useTodos from "../hooks/useTodos";
import { useState } from "react";
import Notification from "./Notification";

function AddTodo() {
	const [showModal, setShowModal] = useState(false);
	const { categories } = useCategories();
	const { handleSubmit, notification } = useTodos();
	
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

			{ notification }

			<Notification show={notification}>
				Tarea agregada correctamente
			</Notification>
		</section>
	);
}

export default AddTodo;
