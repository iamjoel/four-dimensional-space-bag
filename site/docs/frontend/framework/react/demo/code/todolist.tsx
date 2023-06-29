import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTodo() {
    if (inputValue) {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center text-4xl font-bold mb-12">Todo List</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="flex-grow border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                onClick={handleAddTodo}
                className="px-6 py-2 rounded-lg bg-cyan-400 text-white font-medium hover:bg-cyan-500"
              >
                Add
              </button>
            </div>
            {todos.map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2"
              >
                <span>{todo}</span>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList

export function TodoList2() {
  const [todos, setTodos] = useState([
    { id: nanoid(), text: 'Todo item 1', completed: false },
    { id: nanoid(), text: 'Todo item 2', completed: true },
    { id: nanoid(), text: 'Todo item 3', completed: false },
  ])
  const [newTodoText, setNewTodoText] = useState('')

  function handleNewTodoTextChange(event) {
    setNewTodoText(event.target.value)
  }

  function handleNewTodoSubmit(event) {
    event.preventDefault()
    if (!newTodoText.trim())
      return

    setTodos(prevTodos => [
      ...prevTodos,
      { id: nanoid(), text: newTodoText, completed: false },
    ])
    setNewTodoText('')
  }

  function handleTodoDelete(todoId) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  function handleTodoComplete(todoId) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  return (
    <div className="p-4">
      <form onSubmit={handleNewTodoSubmit}>
        <input
          className="border p-2 rounded-lg"
          type="text"
          value={newTodoText}
          onChange={handleNewTodoTextChange}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 ml-2">
          Add
        </button>
      </form>
      <ul className="list-disc list-inside mt-4">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span
              className="cursor-pointer"
              onClick={() => handleTodoComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-2 py-1 ml-2"
              onClick={() => handleTodoDelete(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
