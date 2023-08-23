import { useContext, useState } from "react";
import { todos } from "../utils/data";
import TodoItem from "./TodoItem";
import { TasksContext } from "../context/TaskContext";

function TodoList() {
	const { tasks, setTasks } = useContext(TasksContext);

	const handleChangeComplete = (task) => {
		const newTaks = tasks.map((t) => {
			if (t.todo === task.todo) {
				return { ...t, done: !t.done };
			} else {
				return t;
			}
		});

		setTasks(newTaks);
	};

	return (
		<section className="todos-container">
			<h2>Tareas:</h2>
			<ul>
				{tasks.map((task) => (
					<li key={task.todo}>
						<TodoItem onHandleComplete={handleChangeComplete} task={task} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default TodoList;
