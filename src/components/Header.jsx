import { useState } from "react";

function Header () {
  const [name, setName] = useState(""); 

  return (
    <section className="todo-header">
      <h1> Lista de tareas o recordatorios </h1>
      <span> Hola,  {name} </span>
    </section>
  )
}

export default Header;