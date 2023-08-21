
function AddCategoryForm({setShowModal}) {

	return (
    <form>
      <button onClick={()=> setShowModal(false) }>X</button>
      <input type="text" name="category-name" placeholder="Trabajo" />

      <button type="submit">Crear Categoria</button>
    </form>
	);
}

export default AddCategoryForm;
