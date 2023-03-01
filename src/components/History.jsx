import React from 'react'

function History({history, moveTo, currentMove}) {
  return (
    <div className='history-wrapper'>
        <ul className='history'>{history.map((i,index )=> <li key={index}><button className={`btn-move        ${currentMove === index ? 'active': ''}`} onClick={()=>moveTo(index)} type='button'  >{index === 0 ? 'Go to Game Start': `Go To Move #${index}`}</button></li>)}</ul></div>
  )
}

export default History