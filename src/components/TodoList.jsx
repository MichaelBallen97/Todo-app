import { useContext, useState } from "react";
import { todos } from "../utils/data";
import TodoItem from "./TodoItem";
import { TasksContext } from "../context/TaskContext";

function TodoList() {
	const { tasks, setTasks, initialTask } = useContext(TasksContext);

	const handleChangeComplete = (task) => {
		const newTaks = tasks.map((t) => {
			if (t.todo === task.todo) {
				return { ...t, done: !t.done };
			} else {
				return t;
			}
		});

		initialTask.current = initialTask.current.map((t) => {
			if (t.todo === task.todo) {
				return { ...t, done: !t.done };
			} else {
				return t;
			}
		});

		setTasks(newTaks);
	};

	const deleteTask = (todo) => {
		const newTasks = tasks.filter((task) => task.todo != todo.todo);
		initialTask.current = initialTask.current.filter((task) => task.todo != todo.todo);
		setTasks(newTasks);
	};

	return (
		<section className="todos-container">
			<h2>Tareas:</h2>
			<ul>
				{tasks.map((task) => (
					<li key={task.todo}>
						<TodoItem
							onHandleComplete={handleChangeComplete}
							task={task}
							deleteTask={deleteTask}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}

export default TodoList;
