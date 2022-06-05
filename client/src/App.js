import Addartists from './Components/Addartists';
import AddSong from './Components/AddSong';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        <Route exact path="/artist" element={<Addartists />} />
        <Route exact path="/song" element={<AddSong/>} />
      </Routes>
    </Router>
      {/* <Addartists/> */}
      
      {/* <Home/> */}
    </div>
  );
}

export default App;
