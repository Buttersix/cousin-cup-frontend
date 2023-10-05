import './App.css';
import Home from './Home';
import Team1 from './Team1';
import Team2 from './Team2';
import Team3 from './Team3';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/team1" element={<Team1 />}></Route>
        <Route path="/team2" element={<Team2 />}></Route>
        <Route path="/team3" element={<Team3 />}></Route>
      </Routes>
  );
}

export default App;
