import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//Iniital State
const initialState={
    transcations:[
    ]
}

//Create Context
export const GlobalContext= createContext();

//Provider Component

export const GlobalProvider =({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);

    //Action
    function deleteTranscation(id){
        dispatch({
            type:"DEL",
            payload:id
        })
    }

//Action
function addTranscation(transcation){
    dispatch({
        type:"ADD",
        payload:transcation
    })
}


    return(<GlobalContext.Provider 
    value={{transcations:state.transcations
    ,deleteTranscation,addTranscation}}>
        {children}
    </GlobalContext.Provider>)
}




