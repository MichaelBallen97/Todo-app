import './App.css'
import Header from './components/header'
import AddTodo from './components/AddTodo'
import CategoriesList from './components/CategoriesList'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <Header />
      <AddTodo />
      <CategoriesList />
      <TodoList />
    </>
  )
}

export default App
