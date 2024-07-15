import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo, id: Date.now().toString() }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => {
      prevTodo.id === id ? todo: prevTodo
    }))
  }

  const deleteTodo = (id) => {
    // keep the todo only if it's id is not equal to the current(todo) todo.
    setTodos((prev) => prev.filter((todo) => todo.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  // this use effect will run as soon as the application is mounted and since there's no dependencies in the list [], it'll run only ONCE -> to get all the existing todos from the localStorage
  // Overall, this is used to initialize todos state with the tasks existing in the localstorage of browser such that everyime the UI refreshes still we can get the data from the localstorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  // as soon as the 'todos' changes it'll set it to the localstorage of browser.
  // Overall, this is used to store the 'current state of todos in the localstorage'
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    // Everything inside this <TodoProvider> will be aware of the context. as soon as we bring these TodoContext variables -> value={{..}}, they all must get defined in the same file here in App.jsx
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
