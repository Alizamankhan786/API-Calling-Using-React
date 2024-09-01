// import React, { useState } from 'react'
// import CustomBtn from './components/customBtn';

// import { useEffect, useState } from "react"

// function App() {
//   const [showBtn , setShowBtn] = useState(true);
//   const [btnValue , setBtnValue] = useState("hello")


//   const updateValue = ()=>{
//     const value = prompt("enter updated value");
//     setBtnValue(value)
//   }
//   return (
//     <>
//     <h1>Hello</h1>
//     <button onClick={()=> setShowBtn(!showBtn)}>btn</button>
//     <button onClick={updateValue}>update btn</button>
//     {showBtn ? <CustomBtn title={btnValue} color="orange"/> : null}
//     </>
//   )
// }

// export default App

                         // COUNTER STARTED 

// import { useEffect, useState } from "react";

// function App () {

//   const [add , setAdd] = useState(0);
//   const [subtract , setSubtract] = useState(100);

//   useEffect(() =>{
//     console.log("Compound Mounted");
//     console.log("Compound UnMounted");
    
//   } , []);

//   function addCounter(){
//     setAdd( add + 1)

//   }
//   function lessCounter(){
//     setSubtract( subtract - 1)

//   }

//   return (
//     <>
//     <h1>HEllo Counter</h1>
//     <button onClick={addCounter}>Add {add}</button>
//     <button onClick={lessCounter}>Subtract {subtract}</button>
//     </>
//   )
// }

// export default App

                                      


                                // API CALLING




// import axios from "axios"
// import { useState , useEffect } from "react"

// function App () {

//   const [data , setData] = useState(null);


//   useEffect(() => {
//     async function getData(){
//     const res = await axios("https://jsonplaceholder.typicode.com/users");
//     console.log(res.data);
//     setData(res.data);
//     }
//     getData();

//   } , []);

//   return (
//     <>
//     <h1>API CALLING</h1>
//     {data ? data.map((item) =>{
//       return <div  key = {item.id}>
//       <p>{item.name}</p>
//       </div>
//     }) : <h1>LODAING ...</h1>}

//     </>
//   )
// }

// export default App



                                       // API CALLING


import axios from "axios";
import { useEffect, useState } from "react";


function App(){

  const [data , setData] = useState(null);

  useEffect(() =>{
    async function getData(){
      const res = await axios("https://jsonplaceholder.typicode.com/users")
      console.log(res.data);
      setData(res.data);
      
    }
    getData();
  } , []);

  return(
    <>
    <h1>API CALLING</h1>
    {data ? data.map((item) =>{
      return <div key={item.id}>
        <p>{item.name}</p>
      </div>
    }) : <h1>LODAING ...</h1> }
    </>
  )
}

export default App