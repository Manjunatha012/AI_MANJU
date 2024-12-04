'use client'
import React, { useState } from 'react'

function page() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [editing, setEditing] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)

  const AddTodo = () => {
    if (todo.trim() === '') return

    if (editing) {
      const updatedTodos = todos.map((item, index) =>
        editingIndex === index ? todo : item
      )
      setTodos(updatedTodos)
      setEditing(false)
      setEditingIndex(null)
    } else {
      setTodos([...todos, todo])
    }
    setTodo('')
  }

  const deleteHandler = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const editHandler = (index) => {
    setEditing(true)
    setEditingIndex(index)
    setTodo(todos[index])
  }

  return (
    <div className='p-4 max-w-md mx-auto bg-blue-200'>
      <h4>Todo List</h4>
      <div className='mb-4'>
        <input
          type='text'
          value={todo}
          placeholder='Enter Todo'
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <button
          className='bg-blue-500 text-white py-1 px-2 text-sm rounded mx-2'
          onClick={AddTodo}
        >
          {editing ? 'Update Todo' : 'Add Todo'}
        </button>
        {todos.map((to, i) => (
          <>
            <li key={i} className='px-3 mx-3'>
              {to}

              <button
                onClick={() => editHandler(i)}
                className='bg-red-200 text-white py-1 px-2 text-sm rounded'
              >
                Edit Todo
              </button>
              <button
                onClick={() => deleteHandler(i)}
                className='bg-red-500 text-white py-1 px-2 text-sm rounded mx-2 my-2'
              >
                Delete Todo
              </button>
            </li>
          </>
        ))}
      </div>
    </div>
  )
}

export default page
