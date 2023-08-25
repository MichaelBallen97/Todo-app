function CategoryItem({category, handleDelete, handleFilter}) {
  return (
    <article className="category-item">
      {category === "Todas" ||  <button className="delete-category" onClick={()=> handleDelete(category)}>X</button>}
      <h2 onClick={()=>{handleFilter(category)}}> {category} </h2>
    </article>
  )
}

export default CategoryItem
