import React from 'react'

const Tasks = props => {
  const {
    index,
    value,
    deleteTodo,
    slashTodo
  } = props

  return (
    <div key = {index} className="row-wrapper">
      <div>{value}</div>
      <button type = 'button' onClick={() => slashTodo(index, value)} className='btn'>Done</button>
      <button type = 'button' onClick={() => deleteTodo(index)} className='btn'>Delete</button>
    </div>
  )
}

export default Tasks