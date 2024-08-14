import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={function(){setSelectedId(1);}}>1</button>
    <button onClick={function(){setSelectedId(2);}}>2</button>
    <button onClick={function(){setSelectedId(3);}}>3</button>
    <Todo id={selectedId}/> {/* state variable which changes on button click*/}
  </div>
}

function Todo({id}) {
  const [todo,setTodo]=useState({});

  //implement effect here
  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
      .then(response =>{
        setTodos(response.data.todo);
      })
  }, [id]) //it suggest that if id changes,re-render
// perform side effect in function component,
// sideEffect- don't affect other function, can't be done during Re-Rendering
  return <div>
    Id:{id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;