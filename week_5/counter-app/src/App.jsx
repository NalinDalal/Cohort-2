import './App.css'

let state={
  count:0
}

function App() {
  function onClickHandler(){
    state.count++;
    console.log(state.count);
    console.log("clicked");
  }

  return (
      <div>
        hi there
        <button onClick={onClickHandler}>Counter {state.count}</button>
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
      </div>
  )
}

export default App
//for now a static website