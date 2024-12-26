import React, { useState } from 'react'

function Todoinput(props) {
  const [inputtext, setinputtext]=useState('');
  const handleenterpress =(e)=>{
if(e.kecode===13){
  props.addlist(inputtext)
  setinputtext("")
}
  }
  return (
    <div className='bblanks'>
      <input className='bblanks' type='text'
        placeholder='Enter our todo'
        value={inputtext}
        onChange={e=>{
          setinputtext(e.target.value)
        }}
        onKeyDown={handleenterpress}
        />
        
      <button onClick={()=>{
        props.addlist(inputtext)
        setinputtext("")
      }} className='addbtn'>ADD</button>
      {/* <div className='inputtext'>{inputtext}</div> */}
    </div>
  )
}

export default Todoinput