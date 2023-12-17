import React from 'react';
import './styles/App.css';
import SignIn from './components/Signinform/signin';
import { Routes, Route } from 'react-router-dom';
// import SignUp from './components/Signupform/signup';
import AdminPanel from './panels/admin/app';



function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<SignUp />}></Route> */}
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/adminpanel" element={<AdminPanel />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
