import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalstate'
import Transcation from './Transcation';


const Transcationlist = () => {
  const {transcations} =useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul  className='list'>
        {
          transcations.map(transcation =>(<Transcation 
          key={transcation.id}
          transcation={transcation}/>
           

          ))
        }



       
        </ul>
    </>
  )
}

export default Transcationlist