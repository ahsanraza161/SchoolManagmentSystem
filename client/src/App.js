import React from 'react';
import './styles/App.css';
import SignIn from './components/Signinform/signin';
import Admin from './panels/admin/admin';
import { Routes, Route } from 'react-router-dom';
import Home from './home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/student" element={<Admin />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
