import { useState } from "react";
import CategoryItem from "./CategoryItem";
import Notification from "./Notification";
import AddCategoryForm from "./AddCategoryForm";
import useCategories from "../hooks/useCategories";

function CategoriesList() {
	const [showModal, setShowModal] = useState(false);
	const { categories, handleDelete, handleFilter, handleSubmit, notification } =useCategories();

	return (
		<section className="categories-container">
			<h2> Categorias: </h2>
			<section className="categories-list">
				<ul>
					{categories.map((category) => (
						<li key={category}>
							<CategoryItem
								category={category}
								handleDelete={handleDelete}
								handleFilter={handleFilter}
							/>
						</li>
					))}
				</ul>
				<button
					className="add-category-button"
					onClick={() => setShowModal(true)}
				>
					+
				</button>
			</section>

			<AddCategoryForm
				showModal={showModal}
				setShowModal={setShowModal}
				handleSumbit={handleSubmit}
			/>

			<Notification show={notification}>
				Nueva categoria creada
			</Notification>
		</section>
	);
}

export default CategoriesList;
