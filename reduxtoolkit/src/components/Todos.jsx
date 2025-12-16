import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editableId, setEditableId] = useState(null)
  const [newText, setNewText] = useState("")

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: newText }))
    setEditableId(null)
    setNewText("")
  }

  return (
    <div>
            <ul className='list-none'>
                {todos.map((todo)=>
                  <li
                  className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                  key={todo.id}
                  >
                    {editableId === todo.id ? (
                      <input 
                        value={newText}
                        onChange={(e)=>setNewText(e.target.value)}
                        className="px-2 py-1 rounded text-white"
                        />
                    ): (
                    <div className='text-white'>{todo.text}</div>
                    )}
         
              <div className='flex gap-2'>
                {editableId == todo.id ? (
                  <button
                    onClick={()=>handleUpdate(todo.id)}
                    className = "text-white bg-green-500 px-2 py-1 rounded"

                  >
                    Save
                  </button>
                ): (
                  <button 
                    onClick={()=>{
                      setEditableId(todo.id)
                      setNewText(todo.text)
                    }}
                    className = "text-white bg-green-500 px-2 py-1 rounded"
                  >Edit</button>
                )}
              
              <button
                onClick={()=>dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-2 py-1 rounded"
                >
                Delete
              </button>
                </div>
              </li>
                )}
            </ul>
    </div>
  )
}

export default Todos;
