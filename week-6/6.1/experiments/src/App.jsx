import React,{fragment} from "react"
import { useState } from "react"

function App() {
  const [title,setTitle]=useState("my name is nalin");
  function updateTitle(){
    setTitle("my name is "+Math.random());
  }

  return (
      <div>
        <button onClick={updateTitle}>Update title</button>
        <Header title="nalin1"></Header>
        <Header title={title}></Header>
        <Header title="nalin2"></Header>
        <Header title="nalin1"></Header>
        <Header title="nalin1"></Header>
        <Header title="nalin1"></Header>
      </div>
  )
}

function HeaderWithButton(){
  //state variable defined here
  const [title,setTitle]=useState("my name is nalin");
  function updateTitle(){
    setTitle("my name is "+Math.random());
  }

  return <div>
        <button onClick={updateTitle}>Update title</button>
        <Header title="nalin1"></Header>
        </div>
}

{/* memo function*/}
const Header=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
