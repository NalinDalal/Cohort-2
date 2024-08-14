import React, { useEffect } from 'react'
import './App.css'

function App() {
  //2 return (
  //   <>
  //   {/* 1 */}
  //     <MyComponent />
  //   </>
  // )
  const [render,setRender] = React.useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setRender(false);
    },10000)
    // sets Render to false after 10 sec
  },[]);

  return(
    <>
      {render ? <MyComponent/>:<div></div>}
      {/* if render is true, MyComponent will be rendered else empty div*/}
      {render ? <MyComponent2/>:<div></div>}
    </>
  )
}

{/* 1 */}
// function MyComponent () {
//   const [count, setCount] = useState (0);

//   const incrementCount = () => {
//     setCount(count+ 1) 
//   };
  
//   return ( 
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//     );
// }

{/* update for the 1 code
class MyComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = { count: 0 };
  }
  
  incrementCount = () =>{
    this.setState({ count: this.state.count + 1 });
  }

  render () {
    return ( 
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
*/}

// 2
function MyComponent(){
  useEffect(() => {
    console.log('Component did mount');
    return () => {
      console.log('Component will unmount');
    };
  }, []);
  //render ui
  return <div>from inside My Component</div>;
}



// current as per market
class MyComponent2 extends React. Component {
  componentDidMount () {
  console.log("component mounted")}
  componentWillUnmount () {
  // Clean up (e.g., remove event listeners or cancel subscriptions)
  console.log("unmounted" )
  }
  render () {
  // Render UI
  return <div>hi there</div>
  }
}

/*Component should render for 10 sec then must unmounts */
export default App
