import React from 'react';
import './styles/App.css';
import SignIn from './components/Signinform/signin';
import Student from './panels/student/student';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Signupform/signup' 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/student" element={<Student />}></Route>
      </Routes>
    </div>
  );
}

export default App;
