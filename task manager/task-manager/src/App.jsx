import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function App() {
       
       const[name,setName]=useState("")
       const[email,setEmail]=useState("")
       const[data,setData]=useState([])

       const addData = function () {
         setData([...data, { name, email }]);
         setName("");
         setEmail("");
       }

  return (
    <>
   <Header />
   <br />

   <div className="flex h-10  gap-6 justify-center items-center absolute left-[33%] top-[15%] my-0">
   <Stack spacing={2} direction="row" >
        <TextField 
           name ={name}
           onChange={(event) => setName(event.target.value)}
           id="outlined-basic" 
           label="Name" 
           variant="outlined"/>

        <TextField
          name ={email}
          onChange={(event) =>setEmail(event.target.value)}
          id="outlined-basic" 
          label="Email"
          variant="outlined"/>

          <Button 
            onClick={addData}
            variant="contained">ADD
          </Button>
   </Stack>
   </div>

   <div className="bg-blue-300  ">
     <div className="dataval w-screen flex    justify-center items-start gap-[18vw] font-bold text-[1.8rem]">
         <h4>Name</h4>
         <h4>Email</h4>
         <h4>Remove</h4>
     </div>
     {
      data.map ((element,index) => {
            <div key={index}>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <button>
                   
                </button>
            </div>
      })
     }
   </div>
  
        
      
    </>
  )
}

export default App
