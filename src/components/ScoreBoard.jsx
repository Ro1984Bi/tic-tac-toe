import React from 'react'
import '../css/ScoreBoard.css'

function ScoreBoard({score, xP}) {
    const {xScore, oScore} = score
  return (
    <div className='scoreboard'>
        <span className={ `score x-score ${!xP && "inactive"}`}> X - {xScore} </span>
        <span className={ `score o-score ${xP && "inactive"}`}> O - {oScore} </span>
    </div>
  )
}

export default ScoreBoard