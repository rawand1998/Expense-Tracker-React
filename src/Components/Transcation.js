import React, { useState,useContext } from 'react'
import {GlobleContext} from '../context/GlobleState'
 const Transcation = () => {
   const [text,setText]=useState('')
   const [amount,setAmount]=useState(0)
   const {addTranstion}=useContext(GlobleContext)
     const submit = ()=>{
       const newTransction={
         id:Math.floor(Math.random()*1000),
         text:text,
         amount:+amount //we put plus to avoid save it as string
       }
       addTranstion(newTransction)
     }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" value={text}  onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..."  value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default Transcation;