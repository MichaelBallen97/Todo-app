function AddTodoForm({ setShowModal, categories, handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<button type="button" onClick={() => setShowModal(false)}>X</button>
			<input type="text" name="todo-name" placeholder="Agregar nuevo Todo" />

			<select name="category">
				{categories.map((category) => (
					<option value={category} key={category}>
						{category}
					</option>
				))}
			</select>

			<button type="submit">Crear Todo</button>
		</form>
	);
}

export default AddTodoForm;
