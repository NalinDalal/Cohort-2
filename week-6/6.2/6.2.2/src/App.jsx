import { useState } from 'react'
import {useMemo} from 'react'

{/* 
useMemo-remebering some output,given an input,not to compute it again
operate some operation after some render not every render
*/}
{/* Create an app:
Increase counter by 1
Lets user put a value in an input box(n) and you need to show sum from 1-n
*/}
{/* skip re-render when there is no fucking change,props are unchanged*/}
{/* utilizing useMemo to calculate the sum from 1 to inputValue. When inputValue changes, useMemo recalculates the sum accordingly.*/}
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [count1, setCount] = useState(0);
{/*
  let count = 0;
  for (let i = 1; i <= inputValue; i++) {
    count = count + i;
  } */}

  let count=useMemo(()=>{
    console.log("memo called")
    let finalCount=0;
    for(let i=1;i<=inputValue;i++){
      finalCount=finalCount+i;
    }return finalCount;
  },[inputValue])

//   useEffect(()=>
//   {let finalCount1=0;
//   for(let i=1;i<=inputValue;i++){finalCount1=finalCount1+1;}
//   setCount(finalCount);
// },[inputValue])

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
    {/* Code gets re-render when the button is hit,very expensive re-render*/}
  </div>
}

export default App
