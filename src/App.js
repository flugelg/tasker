import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import TaskList from './components/TaskList';
import About from './components/About';
import WelcomePage from './components/WelcomePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
          <Routes>
            <Route path="/" element={ <WelcomePage /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/home" element={ <TaskList /> } />
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
