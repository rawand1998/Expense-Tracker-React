import React from 'react'

 const Transcation = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
export default Transcation;
