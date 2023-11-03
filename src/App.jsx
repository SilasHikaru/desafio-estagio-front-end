import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import CompanyInfo from './components/CompanyInfo';


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Form type="create"/>}></Route>
        </Routes>
        
      </BrowserRouter>
  )
}

export default App
