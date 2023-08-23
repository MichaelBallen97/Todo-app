import "./App.css";
import Header from "./components/header";
import AddTodo from "./components/AddTodo";
import CategoriesList from "./components/CategoriesList";
import TodoList from "./components/TodoList";
import TaskProvider from "./context/TaskContext";

function App() {
	return (
		<TaskProvider>
			<section className="app-container">
				<Header />
				<AddTodo />
				<CategoriesList />
				<TodoList />
			</section>
		</TaskProvider>
	);
}

export default App;
