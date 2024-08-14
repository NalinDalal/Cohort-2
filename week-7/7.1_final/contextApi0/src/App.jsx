import { useState } from "react"
function App() {
  const [count,setCount]=useState(0); //state variable defined

  return (
    <div>
      <Count count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count}){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer ({count}) {
  const count=1
  return <div>
    {count}
  </div>
}

function Buttons({count,setCount}){
  const count=1
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </div>
}
export default App
