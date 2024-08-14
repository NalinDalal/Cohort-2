function App() {
  return <div>
 {/* <CardWrapper innerComponent={<TextComponent/>}/>
  <CardWrapper innerComponent={<TextComponent2/>}/>
*/}
  <RealCardWrapper3>
    <div>
      hi there345
    </div>
  </RealCardWrapper3>
  <RealCardWrapper3>
    <div>
      hi there3675
    </div>
  </RealCardWrapper3>

  <RealCardWrapper3>
    <RealCardWrapper3>
      <RealCardWrapper3>
        <div>Hi there,this is a 3rd level wrapper</div>
      </RealCardWrapper3>
    </RealCardWrapper3>
  </RealCardWrapper3>
  </div>
}
{/* Cardwrapper,then TestComponent1,then TestComponent2, then RealCardwrapper3*/}
{/* Yup this one works */}
{/*
function CardWrapper({innerComponent}){
  //create a div which has a border("2px solid black")
  // and inside the div, render the prop
  return <div style={{border:"2px solid black", padding:20}}>
    {innerComponent}
  </div>
}

function TextComponent1(){
  return <div>
    hi there
  </div>
}

function TextComponent2(){
  return <div>
    hi there2
  </div>
}
*/}
// real wrapper
function RealCardWrapper3({children}){
  return <div style={{border:"2px solid black", padding:20}}>
    {children}
  </div>
}

export default App
