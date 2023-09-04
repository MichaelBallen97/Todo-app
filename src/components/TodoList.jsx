import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

function TodoList() {
	const { tasks, handleChangeComplete, deleteTask } = useTodos();

	return (
		<section className="todos-container">
			<h2>Tareas:</h2>
			<ul>
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<li key={task.todo}>
							<TodoItem
								onHandleComplete={handleChangeComplete}
								task={task}
								deleteTask={deleteTask}
							/>
						</li>
					))
				) : (
					<p> No hay tareas creadas </p>
				)}
			</ul>
		</section>
	);
}

export default TodoList;
