import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]) // todos is an array

  const addTodo = (todos)=>{
      setTodos((oldTodos) => [{
        id: Date.now(), ...todos
      } , ...oldTodos]

      )
  }

  const deleteTodo = ( id) => {
      setTodos((oldTodos) => oldTodos.filter((todos) => todos.id !== id))
  }
  const updateTodo = (todos , id) =>{
    setTodos((oldTodos) => oldTodos.map((oldTodo) => (oldTodo.id === id ? todos : oldTodo ) )
    )
  }

  const toggleComplete = (id) => {
    setTodos((oldTodos) => oldTodos.map((oldTodo) => (oldTodo.id === id ? {...oldTodo , completed: !oldTodo.completed} : "false" ) )
  )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0 ){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo , updateTodo , deleteTodo , toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
