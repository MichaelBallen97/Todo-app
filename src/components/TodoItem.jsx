function TodoItem({ task, onHandleComplete }) {
	const handleChangeTodo = () => {
		onHandleComplete(task);
	};

	return (
		<section className={task.done ? "todo-item complete" : "tood-item pending"}>
			<input
				type="checkbox"
				name="todo-complete"
				checked={task.done}
				onChange={handleChangeTodo}
			/>
			<span> {task.todo} </span>
		</section>
	);
}

export default TodoItem;
