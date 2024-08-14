import { useState,useEffect } from 'react'

// Custom hook for setInterval with cleanup
function useInterval(callback, delay) {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => clearInterval(intervalId);
  }, [callback, delay]);
}


function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c=>c+1);
  },1000);

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App
