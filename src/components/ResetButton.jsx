import React from 'react'
import '../css/ResetButton.css'

function ResetButton({resetBoard}) {
  return (
    <button className='reset-button' onClick={resetBoard}>Reset</button>
  )
}

export default ResetButton