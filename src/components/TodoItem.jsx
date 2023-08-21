function TodoItem({ task, onHandleComplete }) {
	const handleChangeTodo = () => {
		onHandleComplete(task);
	};

	return (
		<section className="todo-item">
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
