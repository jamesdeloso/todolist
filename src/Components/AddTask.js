import { useState } from 'react'
import Tasks from './Tasks'

const AddTask = () => {
  const [text, setText] = useState({
  todo: '',
  todolist: []
})

const { todo, todolist } = text

const handleOnChange = (e) => {
  const { name, value } = e.target

  setText({ ...text, [name]: value })
}

  /*CREATE*/
  const createTodo = () => {
    const list = todolist 
    list.push(todo) 

    setText({ todo: '', todolist: list })
  }

  /* DELETE */
  const deleteTodo = (index) => {
    const list = todolist 
    list.splice(index, 1) 

    setText({ todo: '', todolist: list })
  }

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          name='todo'
          placeholder='Add Task'
          value={todo}
          onChange={handleOnChange}
        />
      
      <button type = 'button' onClick={createTodo} className='btn btn-block'>Add</button>
      </div>
      <div>
      {
        todolist.length ?
          todolist.map((value, index) => (
            <Tasks
              key={index}
              index={index}
              value={value}
              deleteTodo={deleteTodo}
            />
          )) : <h3>No records found!</h3>
      }
      </div>
    </form>
  )
}

export default AddTask