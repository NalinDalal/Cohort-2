import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    {/* 1 */}
      <div style={{backgroundColor:"red"}}>Hi in red</div>
      <div style={{backgroundColor:"yellow"}}>Hi in yellow</div>
      <div style={{backgroundColor:"green"}}>Inline CSS</div>
      <br/>
      <br/>
    {/* 2 */}
      <div className='flex'>
        <div style={{backgroundColor:"red"}}>Hi in red</div>
        <div style={{backgroundColor:"yellow"}}>Hi in yellow</div>
        <div style={{backgroundcolor:"green"}}>Inline CSS</div>
      </div>
      <br/>
      <br/>

      {/* 3 */}
      {/* Flex-Box */}
      <div className='flex justify-center'>
        <div className=' bg-red-500'>hi</div> 
        <div className=' bg-yellow-500 '>hi</div>
        <div style={{backgroundColor: "yellow"}}>hi</div> 
        <div style={{backgroundColor: "yellow"}}>hi</div> 
        <div style={{backgroundColor: "yellow"}}>hi</div>
      </div>

<br/>
<br/>
{/* 4 */}
      {/* Grid- a grid is a layout system that allows you to structure the content of a web page into rows and columns
      grid-cols-* utilities to create grids with n equally sized columns.

      */}
      <div className='grid grid-cols-3'>
        {/* Children having equal widths,3 defines 3 child of each 33%*/}
        <div className='bg-red-500'>hi</div>
        <div className='bg-yellow-500'>hi</div>
        <div className= 'bg-green-500'>hi</div>
        <div className='bg-green-500'>hi</div>
      </div>

      <br/>
      <br/>
      {/* 5*/}
      {/*Nested maybe */}
      <div className='grid grid-cols-2'>
        <div className='bg-red-500'>hi
            <div className='grid grid-cols-4'>
            <div className='bg-lime-500'>hi</div>
            <div className='bg-sky-500'>hi</div>
            <div className= 'bg-violet-500'>hi</div>
            <div className='bg-fuchsia-500'>hi</div>
          </div>
        </div>
        <br/>
        <br/>
        <div className='bg-green-500'>hi</div>
      </div>

      <br/>
      <br/>
      <div className='flex'>
        <div className='bg-red-500 w-[40%]'>hi</div>
        <div className='bg-yellow-500 w-[40%]'>hi</div> 
        <div className='bg-green-500 w-[20%]'>hi</div>
      </div>

      {/* 6 
      mobile-First: unprefixed utilities (like uppercase) take effect on all screen sizes, while prefixed utilities (like md:uppercase) only take effect at the specified breakpoint and above.
      <!-- This will center text on mobile, and left align it on screens 640px and wider -->
      <div class="text-center sm:text-left"></div>
      */}
      <div class='bg-red-500 md:bg-blue-500'>
        {/* by default red, above md point becomes blue*/}
        42:00
        <div>Hi there2</div>
      </div>

      {/* div which changes color combination if the width is lowered*/}
      <br/>
      <br/>
      {/* by default 1col after md 3 cols*/}
      <div className='grid grid-cols-1 md:grid-cols-3'> 
        <div className=' bg-red-500'>hi there 1</div> 
        <div className=' bg-blue-500'>hi there 1</div> 
        <div className='bg-green-500'>hi there 1</div>
      </div>
    </>
  )
}

export default App
