import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import Bosses from './assets/pages/Bosses';
import Weapons from './assets/pages/Weapons';
import Armors from './assets/pages/Armors';
import './assets/style/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bosses" element={<Bosses />} />
        <Route path="/Weapons" element={<Weapons />} />
        <Route path="/Armors" element={<Armors />} />
      </Routes>
    </Router>
  );
}

export default App;

