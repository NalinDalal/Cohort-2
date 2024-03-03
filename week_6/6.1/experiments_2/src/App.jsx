import React, {Fragment} from 'react'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"go to gym",
    description:"go ot gym today"
  },{
    id:2,
    title:"eat food",
    description:"eat food"
  },{
    id:3,
    title:"go oto class",
    description:"go to class"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
      <div>
        <button onClick={addTodo}>Add a ToDo</button>
        {todos.map(todo=> <Todo title={todo.title} description={todo.description}/>)}
      </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}

export default App
