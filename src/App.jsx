import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Board from './components/Board/Board';




function App() {


 

  return (
    
    <div className="appContainer">
      <SideBar />
      <Board/>
    </div>
    
  );
}


export default App
