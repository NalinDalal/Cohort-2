import { memo,useState,useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const inputFunction=useCallback(()=>{console.log("hi there");},[])
  return <div>
    <ButtonComponent inputFunction={inputFunction}/>
    <button onClick={()=> {
      setCount(count+1);
    }}>Counter {count}</button>
  </div>
}

const ButtonComponent=memo(({inputFunction})=>{
  console.log("child render")
  return <div>
    <button>Button clicked</button>
  </div>
})

export default App
// if parent re-rendered then child too,but if wrapped inside memo then child will re-render only when it's input get re-render or changed
// yup it fucking runs