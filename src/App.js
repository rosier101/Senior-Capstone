import React from 'react';
import logo from './logo.svg';
import './App.css';
//Importating Components
import Buttons from "./components/Buttons";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">

<Header/>
      <h1>Hello</h1>

      <Buttons/>
      
    </div>
  );
}

export default App;
