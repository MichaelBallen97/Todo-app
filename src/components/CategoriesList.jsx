import { useContext, useRef, useState } from "react";
import CategoryItem from "./CategoryItem";
import AddCategoryForm from "./AddCategoryForm";
import { TasksContext } from "../context/TaskContext";

function CategoriesList() {
	const { categories, setCategories, setTasks, initialTask, setSelectedCategory } =
		useContext(TasksContext);
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const newCategory = formData.get("category-name");
		setCategories([...categories, newCategory]);
		e.target.reset();
	};

	const handleDelete = (category) => {
		const newCategories = categories.filter((c) => c != category);

		setCategories(newCategories);
	};

	const handleFilter = (category) => {
		setSelectedCategory(category);
		const newTasks = initialTask.current.filter(task => {
			if(task.categories.includes(category)) {
				return task
			}
		})

		setTasks(newTasks);
	};

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
		</section>
	);
}

export default CategoriesList;
