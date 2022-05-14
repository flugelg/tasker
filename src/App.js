import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import TaskList from './components/TaskList';
import About from './components/About';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div>
        <Header />
        <NavBar />
          <Routes>
            <Route path="/about" element={ <About /> } />
            <Route path="/" element={ <TaskList /> } />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
    </div>

  );
}

export default App;
