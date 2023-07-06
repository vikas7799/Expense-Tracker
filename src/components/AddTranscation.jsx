import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/globalstate'


const AddTranscation = () => {

  const [text, settext] = useState("");
  const [amount, setamount] = useState(0);
  console.log(text);
  console.log(amount);
  const { addTranscation } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTranscation = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTranscation(newTranscation);
  }




  return (
    <>
      <h3>Add New Transcation</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input type='text' value={text} onChange={(e) => settext(e.target.value)} placeholder='Enter text ...' />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">Amount<br />
            (negative -expense ,positive -income)
          </label>
          <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder='Enter amount ...' />
        </div>
        <button className='btn'>Add Transcation</button>
      </form>

    </>
  )
}

export default AddTranscation