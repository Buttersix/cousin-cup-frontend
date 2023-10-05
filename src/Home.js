import React from 'react';
import { Link } from "react-router-dom";
import logo from './cousinCup.png';
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className='image-container'>
        <img src={logo} alt="Farrell Cousin Cup" className="mainLogo" />
      </div>
      <div className='submission-form'>
        <nav>
          <ul>
            <li>
              <Link to="/team1"><button className='link-btn'>11:00 AM</button></Link>
            </li>
            <li>
              <Link to="/team2"><button className='link-btn'>11:10 AM</button></Link>
            </li>
            <li>
              <Link to="/team3"><button className='link-btn'>11:20 AM</button></Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Home;