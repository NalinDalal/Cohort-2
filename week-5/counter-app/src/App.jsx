import './App.css'
import {useState} from "react";

let state={
  count:0
}

function App() {
  //const [state, setState] = useState({count:0})
  const [count, setCount] = useState(0);

  return (
      <div>
        hi there
        {/* <button onClick={onClickHandler}>Counter {state.count}</button> */}
        {/*  comments-> 
        just like html but inside {}

        js dynamic variable inside a react component put inside {}
        state should update on clicking it 
        Real time updates in it 
        just edit and save the website gets changed in real time
        
        Component not re-rendering here
        use hook to define state
        import {useState} from "react"
        */}
        <CustomButton count={count} setCount={setCount}></CustomButton>
        <CustomButton count={count+1} setCount={setCount}></CustomButton>
        <CustomButton count={count-1} setCount={setCount}></CustomButton>
      </div>
  )
}

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count++);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
//for now a static website