import React from 'react'

const Square = ({value, onClick}) => {
  return (
    <button className='Square SquareStyle' onClick={onClick}>
      {value}
    </button>
  )
}

export default Square