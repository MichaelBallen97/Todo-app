import { useContext, useState } from "react";
import CategoryItem from "./CategoryItem";
import AddCategoryForm from "./AddCategoryForm";
import { TasksContext } from "../context/TaskContext";

function CategoriesList() {
	const {categories, setCategories} = useContext(TasksContext)
	const [showModal, setShowModal] = useState(false);

	return (
		<section className="categories-container">
			<ul>
				{categories.map((category) => (
					<li key={category}>
						<CategoryItem category={category} />
					</li>
				))}
			</ul>
			<button onClick={()=> setShowModal(true)}>+</button>

			{showModal && <AddCategoryForm setShowModal={setShowModal} />}
		</section>
	);
}

export default CategoriesList;
