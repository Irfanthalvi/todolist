import React from 'react'

function Todolist(props) {
  return (
    <div style={{display: 'flex', flexDirection : 'row', justifyContent : 'space-around'}}>
    <text className='list-item'>
      {props.item}
      {/* <span className='icons'>
        <i className="fa-stextd fa-trash-can icon-delete"
        >
          <button className='btn' ontextck={e => {
          props.deleteitem(props.index)
        }}>CLEAR</button>
        </i>
      </span> */}
    </text>
    <button  className='btn' onClick={e => {
      props.deleteitem(props.index)
    }}>CLEAR</button>
    </div>
  )
}

export default Todolist