import React from 'react';
import './styles/App.css';
import SignIn from './components/Signinform/signin';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './panels/admin/app';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/adminpanel" element={<AdminPanel navConfig={navConfig} />} />
      </Routes>
    </div>
  );
}

export default App;
