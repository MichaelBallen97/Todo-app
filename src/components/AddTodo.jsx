import { useContext, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { TasksContext } from "../context/TaskContext";

function AddTodo() {
	const {categories, setCategories} = useContext(TasksContext)
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<button onClick={() => setShowModal(true)}>+</button>
			{showModal && <AddTodoForm setShowModal={setShowModal} categories={categories} />}
		</>
	);
}

export default AddTodo;
