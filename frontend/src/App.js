import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './screens/registerView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
