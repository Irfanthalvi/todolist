import React, { useState } from 'react'
import "./App.css"
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist';
function App() {
  const [listtodo,setlisttodo]=useState([]);
  let addlist = (inputtext)=>{
    if(inputtext!=='')
    setlisttodo([...listtodo,inputtext]);
  }
  const deletelistitem = (key)=>{
    let newlisttodo = [...listtodo];
    newlisttodo.splice(key,1)
setlisttodo([...newlisttodo])
  }
  return (
    <div className='app'>
      <div className='blank'>
      <Todoinput addlist={addlist}/>
        <h1 className='todo'>TODO</h1>
        <hr/>
        {listtodo.map((listitem,i)=>{
          return(
            <Todolist key={i} index={i} item={listitem} deleteitem={deletelistitem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
