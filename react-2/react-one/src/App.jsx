import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  // let counter =19;

         let[counter, setcounter]= useState(0);
  
  let addvalue = () => {
    if(counter<20){
      counter =counter + 1;
      setcounter(counter) 
    }
    else{
      alert("you have reached the max limit")
    }
    // console.log("clicked", counter);
   
   
  }
  let removevalue = () => { 
    if(counter>0){
      counter =counter - 1;
      setcounter(counter)     
    } 
    else{
      alert("you have reached the minimum limit");
    }    
   
  }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter:{counter}</h2>

       <button onClick={addvalue}>add value {counter}</button>
       <br></br>
       <button onClick={removevalue} >remove value {counter}</button>
    </>
    
  )
}

export default App
