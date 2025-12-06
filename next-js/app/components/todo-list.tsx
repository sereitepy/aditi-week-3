'use client'
import React, { useEffect, useState } from 'react'

function TodoList() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), task: input }])
      setInput('')
    }
  }

  return (
    <div className='flex flex-col gap-3 rounded-2xl p-5 border border-neutral-400 max-w-70 mx-auto'>
      <h1 className='text-xl font-bold'>Todo List</h1>
      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='Add a task'
          className='border border-neutral-400 rounded-lg text-sm pl-2'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className='rounded-lg border border-neutral-400 text-sm px-2.5 bg-neutral-600 hover:bg-neutral-800 cursor-pointer'
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div>
        {tasks.map(task => {
          return (
            <div key={task.id}>
              <p>{task.task}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
