import "./App.css";
import Header from "./components/header";
import AddTodo from "./components/AddTodo";
import CategoriesList from "./components/CategoriesList";
import TodoList from "./components/TodoList";
import TaskProvider from "./context/TaskContext";

function App() {
	return (
		<TaskProvider>
			<Header />
			<AddTodo />
			<CategoriesList />
			<TodoList />
		</TaskProvider>
	);
}

export default App;
