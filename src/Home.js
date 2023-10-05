import React from 'react';
import logo from './cousinCup.png';
import "./Home.css";

const Home = () => {
  return (
    <div className='image-container'>
      <img src={logo} alt="Farrell Cousin Cup" className="mainLogo" />
    </div>
  )
}

export default Home;