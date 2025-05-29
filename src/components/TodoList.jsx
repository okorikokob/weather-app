import React, {useState} from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange =(e)=>{
        setTodo(e.target.value)

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setTodoList([...todoList, todo])
    }


  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label >Todo</label>
            <input
             type="text" 
              value={todo} 
              onChange={handleChange}
              placeholder='Please enter a task'
              />
              <button type='submit'>Add</button>

        </form>

        <ul>
            {todoList.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList