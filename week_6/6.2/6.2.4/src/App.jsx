import React, { useMemo, useState, useCallback, useEffect } from 'react'
function App() {
  const [count, setCount] = useState(0);
  return <div>
    <Child onClick={handleClick} />
    <button onClick={() => setCount(count + 1)}>hi there</button>
  </div>
}
class Child extends React.Component {
render() {
  const { label, score = 0, total = Math.max(1,score) } = this.props;
  console.log("rerender");
  return(
  <div>
    <h6>{ label }</h6>
    <span>{Math.round(score/total * 100)}%</span>
</div>
)}}
export default App;