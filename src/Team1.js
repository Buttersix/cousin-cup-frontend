import React, { useState } from 'react'
import logo from './cousinCup.png';
import "./Team.css";

const Team1 = () => {
  const [scoreToPar, setScoreToPar] = useState(0);
  const [holeScore, setHoleScore] = useState(0);

  return (
    <>
      <div className='image-container'>
        <img src={logo} alt="Farrell Cousin Cup" className="mainLogo-team" />
      </div>
      <div className="score-container">
        <div className="enter-score">
          <form>
            <input type="number" className='score-input'></input>
            <button className="score-btn">Enter Score</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Team1