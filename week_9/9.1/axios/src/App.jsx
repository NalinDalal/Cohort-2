import { useEffect, useState } from 'react' 
import axios from 'axios'


// create a hook of own, hook is effectively a functions
// 2
// makes the App function more cleaner
function useTodos() {
  const [todos,setTodos] = useState([])

  //3
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const value=setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);

        //3
          setLoading(false);
        })
  },n*1000) //n is the number of seconds
  axios.get("https://sum-server.100xdevs.com/todos")
    .then(res => {
      setTodos(res.data.todos);

    //3
      setLoading(false);
    })

    // to clear the interval,stop the clock
    return ()=> {
      clearInterval(value)
    }
  },[n])

  //1,2
  //return todos

  //3
  return {todos,loading}
}

function App() {
  // 1 const [todos,setTodos] = useState([])

  //2
  // const todos = useTodos();

  //3
  const {todos,loading} = useTodos(5);

  // 1
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(res => {
  //       setTodos(res.data.todos);
  //     })
  // },[])

  //3 
  if(loading) {
    return <div>Loading...</div>
  }

  // 1,2,3
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )

  }

  //1,2,3
function Track({ todo }) {
  return <div>
    {todo.title}
    <br/>
    {todo.description}
  </div>
}

export default App