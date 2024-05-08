import React, { useEffect, useState } from 'react'
import Apform from './apform';

const StructuresForm = () => {
    const [openForm ,setOpenForm]=useState();
    const [showOpenorClose ,setshowOpenorClose]=useState(true);
    // useEffect=()=>{
    //     setshowOpenorClose(true);
    // }
     const setValueForOpenForm=()=>{
        setOpenForm(true);
        setshowOpenorClose(false);
    }
   const setValueForCloseForm=()=>{
        setOpenForm(false)
        setshowOpenorClose(true);
    }
  return (
    <div >
      {showOpenorClose===true?<button onClick={setValueForOpenForm}>open form</button>:<button onClick={setValueForCloseForm}>Close Form</button>}
      <div>
        {openForm?<Apform></Apform>:"form is in closed state"}
        </div>
        
    </div>
  )
}

export default StructuresForm
