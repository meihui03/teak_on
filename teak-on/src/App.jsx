import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
 return(
  <main>
    <div className = "pattern" />

    <div className = "wrapper" >
      <header>
  
        <h1> Find <span className= "text-gradient">Furniture</span> that you like</h1>
      </header>

      <p> Search </p>
      <img src = "./search.png"/>
    </div>
  </main>
 )
}

export default App
