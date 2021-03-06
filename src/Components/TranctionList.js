import React,{useContext} from 'react'
import {GlobleContext} from '../context/GlobleState'
// import '../App.css'
 const TranctionList = () => {
    const {transactions,deleteTranstion} = useContext(GlobleContext)
    
    
  return (
    <> 
    <h2>History</h2>
    <ul id="list"className="list">

{transactions.map(transaction =>( 
    
    <li className={transaction.amount <0 ? 'minus' :'plus'}>
 {transaction.text} <span>${transaction.amount}</span>
 <button className="delete-btn" onClick={()=>deleteTranstion(transaction.id)}>x</button>
</li> 


) )

}
</ul>


</>
  )
}
export default TranctionList;