import { useContext, useState } from "react"
import {CountContext} from "./context.jsx";
function App() {
  const [count,setCount]=useState(0); //state variable defined

  //wrap anyone that wants to use teleported value inside provider
  return (
    <div>
      <CountContext.Provider value={count}> {/*prop given*/}
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer () {
  const count=useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count=useContext(CountContext);
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </div>
}
export default App
