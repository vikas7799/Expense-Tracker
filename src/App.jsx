import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import Transcationlist from './components/Transcationlist'
import AddTranscation from './components/AddTranscation'
import { GlobalProvider } from './context/globalstate'

function App() {

  return (
    <GlobalProvider>
    <Header/>
    <div className='container'> 
      <Balance/>
      <IncomeExpense/>
      <Transcationlist/>
      <AddTranscation/>

    </div>
    </GlobalProvider>
    
  )
}

export default App
