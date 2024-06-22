import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MammalsPage from './pages/MammalsPage';
import ReptilesPage from './pages/ReptilesPage';
import BirdsPage from './pages/BirdsPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layouts';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/birds" element={<BirdsPage />} />
          <Route path="/mammals" element={<MammalsPage />} />
          <Route path="/reptiles" element={<ReptilesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;