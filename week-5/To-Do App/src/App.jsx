import { useState } from 'react'

// todo application
// todo
//{
//  todo:[{title:"todo1",description:"First ToDo",completed:false, }]  
//}

function App() {
  const [todos, setTodos] = useState([{
    title:"Go to gym",
    description:"Go to gym from 7-9",
    completed:false
  },{
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]);
//complicated string
//render one a/f other->dump whole(dumbest way)

function addTodo(){
  setTodos([...todos,{
    title:"new Todo",
    description:"new description",
  }])
}
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo){
        return <ToDo title={todo.title} description={todo.description}/> //returning jsx
      } //map same as javascript
      )}
    </div>
  )
}

function ToDo(props){
  return (<div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>);
  
}

export default App
