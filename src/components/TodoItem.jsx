import CheckboxItem from "./CheckboxItem";

function TodoItem({ task, onHandleComplete }) {
	const handleChangeTodo = () => {
		onHandleComplete(task);
	};

	return (
		<label className={task.done ? "todo-item complete" : "todo-item pending"}>
			<input
				type="checkbox"
				name="todo-complete"
				checked={task.done}
				onChange={handleChangeTodo}
			/>
			<CheckboxItem task={task} />
			<span> {task.todo} </span>
		</label>
	);
}

export default TodoItem;
