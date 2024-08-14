// code written with my logic along with comments->
import {Suspense, lazy} from 'react';
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
//1
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing' 

//2
const Dashboard= lazy (()=>import('./components/Dashboard'))
const Landing = lazy(()=>import('./components/Landing'))

function App() {
  // const navigate=useNavigate(); //initialised  //1
  // {/* Correct way to do navigation, so that we don't have to do hard reloading again and again*/}

  return (
    <div>
    
       {/* 1->
        <div>
      <button onClick={() =>{
        // window.location.href = "/"; //routing,but not right way to route from client side
        navigate("/"); //routing,but right way
      }}>Landing page</button>
      <button onClick={() =>{
        // window.location.href = "/dashboard";
        navigate("/Dashboard");
      }}>Dashboard</button>
    </div>  */}
    
        {/* Client side routing*/}
      <BrowserRouter>
        <Appbar/>
        <Routes>
          {/*<Route path="/Dashboard" element={<Dashboard/>}/>*/}
          {/*</Routes>element={<Suspense fallback=("loading..."}><Dashboard /></Suspense>} /></BrowserRouter> */}
          <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App