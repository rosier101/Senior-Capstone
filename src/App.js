import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Importating Components
import Analysis from "./pages/Analysis";
import Home from "./pages/Home";

function App() {
  return (

    

    <Router>

<div className="App">
  
<Switch>
<Route exact path= "/" component = {Home}/>
<Route exact path= "/analysis" component = {Analysis}/>
</Switch>     
      </div>

      
    </Router>

    );

   
}




export default App;
