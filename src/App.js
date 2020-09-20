import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
