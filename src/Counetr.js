import React from 'react'
import { useState } from 'react';
function Counetr() {
    const [Countt,setCountt]=useState(0)
    const add =() => {
       
        setCountt(Countt+5)
    }
    const sub =() => {
       
        setCountt(Countt-5)
    }
  return (
    <div>
        <button onClick={add}>increment</button>
        <button onClick={sub}>Decrement</button>
        <h1>
            count component: {Countt}
        </h1>
    </div>
   
  )
}

export default Counetr
