function AddCategoryForm({ showModal, setShowModal, handleSumbit }) {
	return (
		showModal && (
			<form onSubmit={handleSumbit}>
				<button type="button" onClick={() => setShowModal(false)}>
					X
				</button>
				<input type="text" name="category-name" placeholder="Trabajo" />

				<button type="submit">Crear Categoria</button>
			</form>
		)
	);
}

export default AddCategoryForm;
