import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //state
  
  return (
    <div>
      <button onClick={function(){
        setCount(count+1);    //state update
      }}>Count is {count}</button>
    </div>
  )
}

export default App
