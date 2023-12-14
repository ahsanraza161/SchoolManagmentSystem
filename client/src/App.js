import React from 'react';
import './styles/App.css';
import SignIn from './components/Signinform/signin';
import Admin from './panels/admin/admin';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Signupform/signup' 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/student" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
