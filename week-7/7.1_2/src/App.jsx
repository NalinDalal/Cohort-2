import { useState } from "react"
function App() {
  const [count,setCount]=useState(0); //state variable defined

  return (
    <div>
      <Count count={count} setCount={setCount}/> {/*rendering state variable*/}
      {/* This guy has setCount*/}
    </div>
  )
}

function Count({count}){
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}/>
    {/*This guy had to pass down setCount,mediater b/w it's child and parent
    Known as Prop Drilling*/}
  </div>
}
function Buttons({count,setCount}){
  //render 2 button-one for incre,one for dec
  //passing count,setCount passed as props
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </div>
}
export default App
