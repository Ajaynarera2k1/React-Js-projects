import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card' 

function App() {
  const [count, setCount] = useState(0)
  
  let someobj={
    name:"koshal",
    cast:"sain",
   
  }
  let myarr = [1,2,3,4]
 
  return (
    <>
      <h1 className='bg-green-300 text-black'>tailwind css</h1>
     
      <Card  NewArr={myarr}  />
      <Card username ="koshal" myobj={someobj}   btntext="swipeup"  NewArr={myarr} />
    

    </>
  )
}

export default App
