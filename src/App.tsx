import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Navigate, Routes } from 'react-router-dom'; 
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Search</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
