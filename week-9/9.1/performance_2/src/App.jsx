import { useEffect, useState } from 'react';
function useDebounce(value, timeout) {
  //anytime value change,start clock for 500ms,that will actually update the value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect ( ()=>{
    let timeountNumber=setTimeout ( () =>{ 
      setDebouncedValue(value)
    },timeout)
    return()=>{
      clearTimeout(timeountNumber);
    }
  }, [value]);
  return debouncedValue;
}

function App(){
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce (value, 500) ;
  // after 500 ms, debouncedValue will be updated with the latest value
  return(
  <>
    Debounced value is {debouncedValue}
    <input type="text" onChange={e => setValue (e. target.value)} />
  </>
  )
}

export default App