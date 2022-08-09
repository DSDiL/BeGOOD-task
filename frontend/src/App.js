import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './screens/registerView';
import ViewDetails from './screens/detailsView';
import Header from './components/navbar';
import Home from './screens/homeView';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/details' element={<ViewDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
