import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import { Route, Routes } from 'react-router-dom';
import AuthNav from './components/AuthNav/AuthNav';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Home from './pages/Home/Home';
import CatalogPage from './pages/CatalogPage';



function App() {
  return (

    <div >
      <AuthNav/>
      <Routes> 
<Route path="/" element = {<Home/>}/>
<Route path="/catalog" element = {<CatalogPage/>}/>
<Route path="/favorites" element = {<div>favorites</div>}/>
<Route path="/*" element={<NotFoundPage />} />
      </Routes>
      
      
    </div>

  );
}


export default App